// app/api/contact/routes.tsx
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY || "");

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function isValidContactNumber(contactNo: string) {
  return /^[0-9]{10}$/.test(contactNo);
}
function sanitizeInput(input: string) {
  return (input || "")
    .replace(/<script.*?>.*?<\/script>/gi, "")
    .replace(/on\w+=".*?"/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    let { name, email, contactNo, message, treatment } = body;

    name = sanitizeInput(name || "");
    email = sanitizeInput(email || "");
    contactNo = sanitizeInput(contactNo || "");
    message = sanitizeInput(message || "");
    treatment = sanitizeInput(treatment || "");

    if (!name || !email || !contactNo) {
      return NextResponse.json({ message: "Name, email and contactNo required." }, { status: 400 });
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }
    if (!isValidContactNumber(contactNo)) {
      return NextResponse.json({ message: "Contact number must be 10 digits." }, { status: 400 });
    }

    // Send email (if you want)
    try {
      await resend.emails.send({
        from: "Dr. Payal Bajaj <info@drpayalbajaj.com>",
        to: ["drpayalbajaj@gmail.com"],
        subject: treatment ? `IVF Form: ${treatment}` : "New Contact Form Submission",
        html: `<div>
                <h3>New submission</h3>
                <p><b>Name:</b> ${name}</p>
                <p><b>Email:</b> ${email}</p>
                <p><b>Contact:</b> ${contactNo}</p>
                ${treatment ? `<p><b>Treatment:</b> ${treatment}</p>` : ""}
                ${message ? `<p><b>Message:</b> ${message}</p>` : ""}
               </div>`,
      });
    } catch (resendErr) {
      console.error("Resend error:", resendErr);
      // don't block leads if email fails — continue to sheet attempt
    }

    // === Google Sheets append ===
    const credsRaw = process.env.GOOGLE_SHEETS_CREDENTIALS || "";
    if (!credsRaw) {
      console.error("Missing GOOGLE_SHEETS_CREDENTIALS env var");
      return NextResponse.json({ message: "Server misconfiguration: missing sheets credentials" }, { status: 500 });
    }

    let credentials;
    try {
      credentials = JSON.parse(credsRaw);
    } catch (err) {
      console.error("Invalid GOOGLE_SHEETS_CREDENTIALS JSON:", err);
      return NextResponse.json({ message: "Invalid sheets credentials JSON" }, { status: 500 });
    }

    // log service account email so you can verify sheet sharing
    console.log("Service account email:", credentials.client_email || "NO_CLIENT_EMAIL_IN_CREDENTIALS");

    try {
      const auth = new google.auth.GoogleAuth({
        credentials,
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      const appendResponse = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:F",
        valueInputOption: "RAW",
        requestBody: {
          values: [[new Date().toISOString(), name, email, contactNo, treatment || "", message || ""]],
        },
      });

      console.log("Sheets append result:", appendResponse.status, appendResponse.statusText);
      if (appendResponse.status !== 200) {
        console.error("Sheets append non-200:", appendResponse.data);
        return NextResponse.json({ message: "Failed to save to sheet" }, { status: 500 });
      }
    } catch (sheetErr) {
      console.error("Error saving to Google Sheets:", sheetErr);
      return NextResponse.json({ message: "Failed to save to Google Sheets", error: String(sheetErr) }, { status: 500 });
    }

    return NextResponse.json({ message: "Form submitted and saved." }, { status: 200 });
  } catch (err) {
    console.error("Server error in /api/contact:", err);
    return NextResponse.json({ message: "Internal server error", error: String(err) }, { status: 500 });
  }
}
