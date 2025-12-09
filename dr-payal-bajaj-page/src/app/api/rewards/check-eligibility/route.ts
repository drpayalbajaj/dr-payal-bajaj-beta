import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID; // Google Sheet ID

export async function POST(req: NextRequest) {
  if (req.method !== 'POST') {
    return NextResponse.json({ error: 'Method not allowed' },{status: 500});
  }

  const body = await req.json();
  const { email } = body;

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
    const ClaimedResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: 'Rewards!B:B', // Assuming email is in column B
    });

    const eligibleEmails = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: "EligibleCustomers!A:A", // Adjust your sheet name & range
    });

    const emailsList =
      eligibleEmails.data.values?.map((row) => row[0]?.trim().toLowerCase()) || [];

    if (!emailsList.includes(email.trim().toLowerCase())) {
      return NextResponse.json(
        { eligible: false, message: "User not eligible for reward games." },
        { status: 200 }
      );
    }

    const rows = ClaimedResponse.data.values || [];
    const exists = rows.some((row) => row[0]?.toLowerCase() === email.toLowerCase());
    if (exists) {
      return NextResponse.json(
        { eligible: false, message: "User not eligible for reward games." },
        { status: 200 }
      );
    }
    return NextResponse.json({ eligible:true, message:"You are eligible for reward games." },{status:200});
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error },{status:500});
  }
}
