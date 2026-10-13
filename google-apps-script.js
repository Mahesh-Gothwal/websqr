/**
 * WebSqr website enquiries → Google Sheet + email
 *
 * Setup (5 minutes):
 * 1. Create a Google Sheet (any name, e.g. "WebSqr Website Enquiries").
 * 2. Extensions → Apps Script. Delete the sample code and paste this whole file. Save.
 * 3. Deploy → New deployment → Select type: Web app
 *      Execute as: Me
 *      Who has access: Anyone
 *    Click Deploy, then Authorize access with the Google account that owns the sheet.
 * 4. Copy the Web app URL (ends in /exec) and paste it into `sheetEndpoint` in src/content.js,
 *    then run `npm run build` and upload dist/ again.
 *
 * The "Enquiries" tab and its header row are created automatically on the first enquiry.
 * After editing this script later, use Deploy → Manage deployments → Edit → Version: New version
 * so the same URL keeps working.
 */

const SHEET_NAME = 'Enquiries';
const NOTIFY_EMAIL = 'info.websqr@gmail.com';
const COLUMNS = ['Date & time', 'Name', 'Email', 'Phone / WhatsApp', 'Brand', 'Service', 'Project details', 'Page', 'Came from', 'Status'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const p = (e && e.parameter) || {};
    if (p._honey) return json({ok: true}); // spam trap

    const sheet = getSheet();
    const row = [
      new Date(),
      clean(p.name), clean(p.email), clean(p.phone), clean(p.brand),
      clean(p.service), clean(p.message), clean(p.page), clean(p.source), 'New',
    ];
    sheet.appendRow(row);

    MailApp.sendEmail({
      to: NOTIFY_EMAIL,
      replyTo: p.email || NOTIFY_EMAIL,
      subject: 'New website enquiry: ' + (p.brand || p.name || 'WebSqr'),
      htmlBody: emailHtml(p, sheet),
    });
    return json({ok: true});
  } catch (err) {
    return json({ok: false, error: String(err)});
  } finally {
    lock.releaseLock();
  }
}

// Visiting the web-app URL in a browser shows this, so you can check it's live.
function doGet() {
  return ContentService.createTextOutput('WebSqr enquiry endpoint is live.');
}

function getSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(COLUMNS);
    sheet.getRange(1, 1, 1, COLUMNS.length).setFontWeight('bold').setBackground('#5A5CFF').setFontColor('#FFFFFF');
    sheet.setFrozenRows(1);
    sheet.setColumnWidth(7, 380);
    sheet.getRange('A:A').setNumberFormat('dd mmm yyyy, hh:mm');
  }
  return sheet;
}

// Keeps text short and stops values starting with = + - @ being run as formulas
function clean(v) {
  v = String(v == null ? '' : v).slice(0, 5000);
  return /^[=+\-@]/.test(v) ? "'" + v : v;
}

function esc(v) {
  return String(v == null ? '' : v).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
}

function emailHtml(p, sheet) {
  const rows = [['Name', p.name], ['Email', p.email], ['Phone / WhatsApp', p.phone], ['Brand', p.brand], ['Service', p.service], ['Page', p.page]]
    .map(([k, v]) => `<tr><td style="padding:6px 12px 6px 0;color:#5D5C57">${k}</td><td style="padding:6px 0"><b>${esc(v) || '—'}</b></td></tr>`).join('');
  return `<div style="font-family:Helvetica,Arial,sans-serif;font-size:15px;color:#0B0B0B">
    <h2 style="margin:0 0 12px;color:#5A5CFF">New website enquiry</h2>
    <table style="border-collapse:collapse">${rows}</table>
    <p style="margin:16px 0 6px;color:#5D5C57">Project details</p>
    <p style="margin:0;padding:12px;background:#F4F2EB;white-space:pre-wrap">${esc(p.message)}</p>
    <p style="margin:16px 0 0;font-size:13px"><a href="${sheet.getParent().getUrl()}">Open the enquiries sheet</a></p>
  </div>`;
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}
