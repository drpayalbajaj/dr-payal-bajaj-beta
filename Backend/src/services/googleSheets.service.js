
import { google } from 'googleapis';

export const saveToGoogleSheets = async ({ name, email, phone, treatment, timestamp }) => {
    const hasCredentials = process.env.GOOGLE_SHEETS_CREDENTIALS || 
                          (process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_CLIENT_EMAIL);
    
    if (!hasCredentials || !process.env.GOOGLE_SHEET_ID) {
        throw new Error("Google Sheets not configured");
    }

    let credentials;
    
    if (process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_CLIENT_EMAIL) {
        credentials = {
            type: "service_account",
            project_id: process.env.GOOGLE_PROJECT_ID || "default-project",
            private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
            client_email: process.env.GOOGLE_CLIENT_EMAIL,
            token_uri: "https://oauth2.googleapis.com/token",
        };
    } else if (process.env.GOOGLE_SHEETS_CREDENTIALS) {
        credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS.trim());
    }

    const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: 'Sheet1!A:E',
        valueInputOption: 'RAW',
        requestBody: {
            values: [[name, email, phone, treatment, timestamp]],
        },
    });

    return true;
};