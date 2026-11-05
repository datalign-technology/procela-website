import { createHmac, timingSafeEqual } from "crypto";

// Short-lived token that ties an eval download back to the registration that
// produced it. Issued by /api/demo on a successful "eval" submission and
// redeemed by /api/download/eval, so the actual file fetch can be attributed
// to a named lead rather than guessed at.
//
// Signing is best-effort: set EVAL_DOWNLOAD_SECRET to make tokens tamper-proof
// (redemptions come back verified:true). Without it, tokens still carry the
// lead details and downloads still work — they're just marked verified:false,
// so you can tell trusted attributions from ones that could have been forged.
const SECRET = process.env.EVAL_DOWNLOAD_SECRET;
const TTL_MS = 60 * 60 * 1000; // 1 hour

export type DownloadClaims = {
  name: string;
  email: string;
  company: string;
  role?: string;
};

type Payload = { n: string; e: string; c: string; r?: string; t: number };

function b64url(s: string | Buffer) {
  return Buffer.from(s).toString("base64url");
}

function sign(body: string): string {
  if (!SECRET) return "";
  return createHmac("sha256", SECRET).update(body).digest("base64url");
}

/** Build a download token embedding the lead details and an issue timestamp. */
export function issueDownloadToken(claims: DownloadClaims): string {
  const payload: Payload = {
    n: claims.name,
    e: claims.email,
    c: claims.company,
    r: claims.role || undefined,
    t: Date.now(),
  };
  const body = b64url(JSON.stringify(payload));
  const sig = sign(body);
  return sig ? `${body}.${sig}` : body;
}

export type Verified = {
  claims: DownloadClaims | null;
  verified: boolean; // true only when a configured secret validated the signature
  expired: boolean;
};

/** Parse and (when a secret is configured) verify a download token. Never
 *  throws — returns nulls/flags the caller can log and act on. */
export function readDownloadToken(token: string | null | undefined): Verified {
  const empty: Verified = { claims: null, verified: false, expired: false };
  if (!token) return empty;

  const [body, sig] = token.split(".");
  if (!body) return empty;

  let payload: Payload;
  try {
    payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
  } catch {
    return empty;
  }
  if (!payload || typeof payload.e !== "string" || typeof payload.t !== "number") {
    return empty;
  }

  const expired = Date.now() - payload.t > TTL_MS;

  let verified = false;
  if (SECRET && sig) {
    const expected = sign(body);
    try {
      const a = Buffer.from(sig);
      const b = Buffer.from(expected);
      verified = a.length === b.length && timingSafeEqual(a, b);
    } catch {
      verified = false;
    }
  }

  return {
    claims: { name: payload.n, email: payload.e, company: payload.c, role: payload.r },
    verified,
    expired,
  };
}
