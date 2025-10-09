import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from "googleapis";

const resend = new Resend(process.env.RESEND_API_KEY);

// Email validation
const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// 10-digit phone validation
const isValidContactNumber = (contactNo: string) =>
  /^[0-9]{10}$/.test(contactNo);

// Basic input sanitization
const sanitizeInput = (input: string) =>
  input
    .replace(/<script.*?>.*?<\/script>/gi, "")
    .replace(/on\w+=".*?"/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Accept both forms
    const {
      name: rawName,
      email: rawEmail,
      contactNo: rawContactNo,
      phone: rawPhone,
      message: rawMessage,
      treatment: rawTreatment,
    } = body;

    // Normalize fields for both forms
    const name = sanitizeInput(rawName || "");
    const email = sanitizeInput(rawEmail || "");
    const contactNo = sanitizeInput(rawContactNo || rawPhone || "");
    const treatment = sanitizeInput(rawTreatment || rawMessage || "");

    // Validate required fields
    if (!name || !email || !contactNo || !treatment) {
      return NextResponse.json({ message: "All fields are required." }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
    }

    if (!isValidContactNumber(contactNo)) {
      return NextResponse.json({ message: "Contact number must be 10 digits." }, { status: 400 });
    }

    // Send email
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
          <p><strong>Message/Treatment:</strong> ${treatment}</p>
          <p><strong>UTC:</strong> ${new Date().toISOString()}</p>
          <p><strong>IST:</strong> ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return NextResponse.json({ message: "Failed to send email." }, { status: 500 });
    }

    // Append to Google Sheets
    try {
      const auth = new google.auth.JWT({
        email: process.env.GOOGLE_CLIENT_EMAIL,
        key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "Sheet1!A:G",
        valueInputOption: "RAW",
        requestBody: {
          values: [
            [
              name,
              email,
              contactNo,
              treatment,
              new Date().toISOString(), // UTC
              new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }), // IST
              "", // Remark
            ],
          ],
        },
      });
    } catch (err) {
      console.error("Error saving to Google Sheets:", err);
      // Do not block form submission if Sheet fails
    }

    return NextResponse.json({ message: "Thank you! We'll get back to you soon." }, { status: 200 });
  } catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ message: "Internal server error." }, { status: 500 });
  }
}
