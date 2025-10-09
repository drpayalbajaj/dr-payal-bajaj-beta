import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidContactNumber(contactNo: string) {
  return /^[0-9]{10}$/.test(contactNo);
}

function sanitizeInput(input: string) {
  return input
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
    let { name, email, contactNo, treatment, message } = body;

    name = sanitizeInput(name || "");
    email = sanitizeInput(email || "");
    contactNo = sanitizeInput(contactNo || "");
    treatment = sanitizeInput(treatment || "");
    message = sanitizeInput(message || "");

    if (!name || !email || !contactNo || !treatment) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }

    if (!isValidContactNumber(contactNo)) {
      return NextResponse.json({ message: "Contact number must be 10 digits." }, { status: 400 });
    }

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: "Dr. Payal Bajaj <info@drpayalbajaj.com>",
      to: ["drpayalbajaj@gmail.com"],
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Contact No:</strong> ${contactNo}</p>
          <p><strong>Treatment:</strong> ${treatment}</p>
          <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
    }

    // Google Sheets Integration
    try {
      const credentials = JSON.parse(process.env.GOOGLE_SHEETS_CREDENTIALS || "{}");

      const auth = new google.auth.JWT({
        email: credentials.client_email,
        key: credentials.private_key?.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:F",
        valueInputOption: "RAW",
        requestBody: {
          values: [[name, email, contactNo, treatment, message, new Date().toLocaleString()]],
        },
      });
    } catch (err) {
      console.error("Error saving to Google Sheets:", err);
      // Optional: ignore or return a warning
    }

    return NextResponse.json(
      { message: "Thank you for contacting us! We'll get back to you soon." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ message: "Internal server error." }, { status: 500 });
  }
}
