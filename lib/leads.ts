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

// Persistence is optional: set LEADS_TABLE to a DynamoDB table (partition key
// `id`, string) to turn it on. Region comes from LEADS_AWS_REGION, or the
// AWS_REGION the Amplify runtime already provides. Credentials resolve through
// the default AWS provider chain (the runtime's execution role, or standard
// AWS_* env vars) — nothing extra to configure when running on AWS.
const TABLE = process.env.LEADS_TABLE;
const REGION = process.env.LEADS_AWS_REGION || process.env.AWS_REGION;

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
  return Boolean(TABLE);
}

/**
 * Persist a lead to DynamoDB. Returns true when written, false when storage
 * isn't configured. Throws only on an actual write failure — callers treat it
 * as best-effort so a datastore hiccup never drops the email path.
 */
export async function saveLead(lead: Lead): Promise<boolean> {
  if (!TABLE) return false;
  const item: Record<string, unknown> = {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
  };
  for (const [k, v] of Object.entries(lead)) {
    if (v !== undefined && v !== "") item[k] = v;
  }
  await client().send(new PutCommand({ TableName: TABLE, Item: item }));
  return true;
}
