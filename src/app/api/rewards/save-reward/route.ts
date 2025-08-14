import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID; // Google Sheet ID
const SHEET_NAME = 'Rewards'; // Change if needed

function getISTDateTime() {
  const now = new Date();
  const istOffset = 5.5 * 60 * 60 * 1000; // +5:30
  return new Date(now.getTime() + istOffset)
    .toISOString()
    .replace('T', ' ')
    .split('.')[0];
}

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' }, {status: 400});
  }
  const body = await req.json();
  const { name, email, phone, coupon } = body;

  if (!name || !email || !phone || !coupon) {
    return NextResponse.json({ error: 'All fields are required' }, {status: 400});
  }

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || '{}');

    const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const date = getISTDateTime();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${SHEET_NAME}!A:F`,
      valueInputOption: 'RAW',
      requestBody: {
        values: [[name, email, phone, coupon, date,"No"]],
      },
    });

    return NextResponse.json({ success: true }, {status: 200});
  } catch (error: any) {
    console.log("ERROR:",error);
    return NextResponse.json({ error: error.message }, {status: 400});
  }
}
