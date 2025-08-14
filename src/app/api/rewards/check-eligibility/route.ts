import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID; // Google Sheet ID

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' },{status: 500});
  }

  const body = await req.json();
  let { email } = body;

  if (!email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 });
  }

  try {
    const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || '{}');

    const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    console.log(SPREADSHEET_ID);

    const sheets = google.sheets({ version: 'v4', auth });
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Rewards!B:B', // Assuming email is in column B
    });

    const rows = response.data.values || [];
    const exists = rows.some((row) => row[0]?.toLowerCase() === email.toLowerCase());

    return NextResponse.json({ exists },{status:200});
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message },{status:500});
  }
}
