import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { google } from 'googleapis';

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidContactNumber(contactNo: string): boolean {
    return /^[6-9][0-9]{9}$/.test(contactNo);
}

function sanitizeInput(input: string): string {
    if (!input) return '';
    return input
        .replace(/<script.*?>.*?<\/script>/gi, '')
        .replace(/on\w+=".*?"/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .trim();
}

function validateFormData(data: any): { isValid: boolean; error?: string } {
    const { name, email, contactNo, message } = data;

    if (!name || !email || !contactNo || !message) {
        return { isValid: false, error: "All fields are required." };
    }

    if (name.length < 2 || name.length > 50) {
        return { isValid: false, error: "Name must be between 2 and 50 characters." };
    }
    
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        return { isValid: false, error: "Name can only contain letters and spaces." };
    }

    if (!isValidEmail(email)) {
        return { isValid: false, error: "Please enter a valid email address." };
    }

    if (!isValidContactNumber(contactNo)) {
        return { isValid: false, error: "Please enter a valid 10-digit mobile number." };
    }

    if (message.length > 1000) {
        return { isValid: false, error: "Message is too long. Maximum 1000 characters allowed." };
    }

    return { isValid: true };
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        
        let { name, email, contactNo, message } = body;

        name = sanitizeInput(name || '');
        email = sanitizeInput(email || '');
        contactNo = sanitizeInput(contactNo || '');
        message = sanitizeInput(message || '');

        const validation = validateFormData({ name, email, contactNo, message });
        if (!validation.isValid) {
            return NextResponse.json({ message: validation.error }, { status: 400 });
        }

        if (!process.env.RESEND_API_KEY) {
            return NextResponse.json({ 
                message: "Email service not configured." 
            }, { status: 500 });
        }

        const { error } = await resend.emails.send({
            from: "Dr. Payal Bajaj <send@drpayalbajaj.com>",
            to: ["drpayalbajaj@gmail.com"],
            replyTo: email,
            subject: `New Contact Form - ${name}`,
            html: `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background: linear-gradient(135deg, #ec4899 0%, #db2777 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
                    .content { background: #f9fafb; padding: 30px; border: 1px solid #e5e7eb; border-radius: 0 0 8px 8px; }
                    .field { margin-bottom: 20px; }
                    .label { font-weight: bold; color: #374151; margin-bottom: 5px; }
                    .value { color: #1f2937; background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #ec4899; }
                    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2 style="margin: 0;">🆕 New Contact Form Submission</h2>
                        <p style="margin: 5px 0 0 0; opacity: 0.9;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                    </div>
                    <div class="content">
                        <div class="field">
                            <div class="label">👤 Name:</div>
                            <div class="value">${name}</div>
                        </div>
                        <div class="field">
                            <div class="label">📧 Email:</div>
                            <div class="value"><a href="mailto:${email}" style="color: #ec4899; text-decoration: none;">${email}</a></div>
                        </div>
                        <div class="field">
                            <div class="label">📱 Contact Number:</div>
                            <div class="value"><a href="tel:+91${contactNo}" style="color: #ec4899; text-decoration: none;">+91 ${contactNo}</a></div>
                        </div>
                        <div class="field">
                            <div class="label">💬 Treatment Interest:</div>
                            <div class="value">${message}</div>
                        </div>
                    </div>
                    <div class="footer">
                        <p>This email was sent from drpayalbajaj.com</p>
                        <p>Reply directly to contact ${name}</p>
                    </div>
                </div>
            </body>
            </html>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Contact Number: +91 ${contactNo}
Treatment Interest: ${message}

Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
            `.trim(),
        });
        
        if (error) {
            return NextResponse.json({ 
                message: "Failed to send email. Please try again later." 
            }, { status: 500 });
        }

        try {
            const hasCredentials = process.env.GOOGLE_SHEETS_CREDENTIALS || 
                                  (process.env.GOOGLE_PRIVATE_KEY && process.env.GOOGLE_CLIENT_EMAIL);
            
            if (hasCredentials && process.env.GOOGLE_SHEET_ID) {
                let credentials: any;
                
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

                if (credentials) {
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
                            values: [[
                                name,
                                email,
                                contactNo,
                                message,
                                new Date().toLocaleString('en-IN', { 
                                    timeZone: 'Asia/Kolkata',
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    second: '2-digit',
                                    hour12: true
                                })
                            ]],
                        },
                    });
                }
            }
        } catch {
            // Silently fail - email already sent
        }
        
        return NextResponse.json({ 
            message: "Thank you for contacting us! We'll get back to you soon.",
            success: true
        }, { status: 200 });

    } catch (error) {
        return NextResponse.json({ 
            message: "An unexpected error occurred. Please try again later."
        }, { status: 500 });
    }
}