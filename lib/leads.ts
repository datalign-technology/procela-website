import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";

/**
 * A demo or pilot request captured from the marketing site.
 * Optional fields are omitted from the stored item when empty.
 */
export type Lead = {
  intent: "demo" | "pilot";
  name: string;
  email: string;
  company: string;
  role?: string;
  phone?: string;
  companySize?: string;
  deployment?: string;
  industry?: string;
  message?: string;
};

// Persistence sinks are optional and independent — turn on either, both, or
// neither. Each is a no-op until its env vars are set.
//
// DynamoDB: set LEADS_TABLE to a table (partition key `id`, string). Region
// comes from LEADS_AWS_REGION, or the AWS_REGION the Amplify runtime provides.
// Credentials resolve through the default AWS provider chain (the runtime's
// execution role, or standard AWS_* env vars).
//
// Google Sheet: set LEADS_SHEETS_WEBHOOK_URL to the /exec URL of a Google
// Apps Script Web App bound to the sheet (it appends a row per POST).
// LEADS_SHEETS_TOKEN is an optional shared secret the script can verify.
const TABLE = process.env.LEADS_TABLE;
const REGION = process.env.LEADS_AWS_REGION || process.env.AWS_REGION;
const SHEETS_URL = process.env.LEADS_SHEETS_WEBHOOK_URL;
const SHEETS_TOKEN = process.env.LEADS_SHEETS_TOKEN;

const SHEETS_TIMEOUT_MS = 6000;

let docClient: DynamoDBDocumentClient | null = null;
function client() {
  if (!docClient) {
    docClient = DynamoDBDocumentClient.from(
      new DynamoDBClient(REGION ? { region: REGION } : {}),
    );
  }
  return docClient;
}

export function leadsConfigured() {
  return Boolean(TABLE || SHEETS_URL);
}

function toRecord(lead: Lead) {
  const rec: Record<string, unknown> = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  for (const [k, v] of Object.entries(lead)) {
    if (v !== undefined && v !== "") rec[k] = v;
  }
  return rec;
}

/** Write a lead to DynamoDB. Returns false when not configured; throws on a
 *  real write failure so the caller can log it. */
async function saveToDynamo(record: Record<string, unknown>): Promise<boolean> {
  if (!TABLE) return false;
  await client().send(new PutCommand({ TableName: TABLE, Item: record }));
  return true;
}

/** Append a lead to a Google Sheet via an Apps Script Web App webhook.
 *  Returns false when not configured; throws on a non-2xx or timeout. */
async function saveToSheet(record: Record<string, unknown>): Promise<boolean> {
  if (!SHEETS_URL) return false;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), SHEETS_TIMEOUT_MS);
  try {
    const res = await fetch(SHEETS_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(SHEETS_TOKEN ? { token: SHEETS_TOKEN, ...record } : record),
      signal: controller.signal,
    });
    if (!res.ok) {
      throw new Error(`Sheets webhook responded ${res.status}`);
    }
    return true;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Persist a lead to every configured sink (DynamoDB and/or Google Sheet).
 * Sinks run independently and best-effort: one failing never blocks the other,
 * and failures are logged rather than thrown. Returns true if at least one
 * sink stored the lead, so callers can treat the request as captured.
 */
export async function recordLead(lead: Lead): Promise<boolean> {
  const record = toRecord(lead);
  const sinks: [string, Promise<boolean>][] = [
    ["DynamoDB", saveToDynamo(record)],
    ["Google Sheet", saveToSheet(record)],
  ];
  const results = await Promise.allSettled(sinks.map(([, p]) => p));
  let saved = false;
  results.forEach((r, i) => {
    if (r.status === "fulfilled") {
      if (r.value) saved = true;
    } else {
      console.error(`Lead persistence to ${sinks[i][0]} failed:`, r.reason);
    }
  });
  return saved;
}
