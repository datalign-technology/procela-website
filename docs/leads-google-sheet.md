# Send form leads to a Google Sheet

Demo and pilot submissions can be appended to a Google Sheet in addition to
the notification email and (optionally) DynamoDB. This uses a **Google Apps
Script Web App** as a webhook, so there is no service-account JSON to manage —
the website just POSTs each lead to a URL.

## 1. Create the sheet + script

1. Create a Google Sheet. Add a tab named **`Leads`** (or leave the default —
   the script falls back to the first tab).
2. **Extensions → Apps Script**, delete the placeholder, and paste:

```javascript
// Optional shared secret. If set, it must match the LEADS_SHEETS_TOKEN env var.
const SECRET = '';

// Column order written to the sheet (header row is created automatically).
const COLUMNS = [
  'createdAt', 'intent', 'name', 'email', 'company',
  'role', 'phone', 'companySize', 'deployment', 'industry', 'message', 'id',
];

function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    if (SECRET && body.token !== SECRET) {
      return json({ ok: false, error: 'unauthorized' });
    }
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName('Leads') || ss.getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(COLUMNS);
    sheet.appendRow(COLUMNS.map(function (c) { return body[c] != null ? body[c] : ''; }));
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. If you want a shared secret, set `SECRET` to a random string.

## 2. Deploy the web app

1. **Deploy → New deployment → Web app**.
2. **Execute as:** Me. **Who has access:** Anyone.
3. Authorize when prompted, then copy the **Web app URL** (ends in `/exec`).

## 3. Configure the site

In the Amplify environment variables (Hosting → Environment variables):

- `LEADS_SHEETS_WEBHOOK_URL` = the `/exec` URL from step 2
- `LEADS_SHEETS_TOKEN` = the same value as `SECRET`, only if you set one

Redeploy so `amplify.yml` forwards the vars into the runtime. Submit a test
lead — a new row should appear in the sheet.

## Notes

- The Google Sheet and DynamoDB sinks are independent. Enable either, both, or
  neither; each is a no-op until its env vars are set, and one failing never
  blocks the other or the email.
- To change a deployment's script, redeploy it as a **new version** of the same
  deployment so the `/exec` URL stays the same.
