import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone: string) {
    return /^[0-9]{10}$/.test(phone);
}

function sanitizeInput(input: string) {
    return input
        .replace(/<script.*?>.*?<\/script>/gi, '')
        .replace(/on\w+=".*?"/gi, '')
        .replace(/javascript:/gi, '')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .trim();
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        let { name, email, phone, location, message } = body;

        name = sanitizeInput(name || '');
        email = sanitizeInput(email || '');
        phone = sanitizeInput(phone || '');
        location = sanitizeInput(location || '');
        message = sanitizeInput(message || '');

        if (!name || !email || !phone || !location || !message) {
            return NextResponse.json({ message: "All fields are required." }, { status: 400 });
        }

        if (!isValidEmail(email)) {
            return NextResponse.json({ message: "Invalid email format." }, { status: 400 });
        }

        if (!isValidPhone(phone)) {
            return NextResponse.json({ message: "Phone number must be 10 digits." }, { status: 400 });
        }

        if (message.length > 1000) {
            return NextResponse.json({ message: "Message too long. Max 1000 characters." }, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: "Enquiry Landing Page - Dr. Payal Bajaj <info@drpayalbajaj.com>",
            to: ["drpayalbajaj@gmail.com"],
            subject: "New Enquiry Form Submission From Landing Page",
            html: `
                <div style="font-family: Arial, sans-serif; color: #333;">
                    <h2>New Enquiry Received</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Location:</strong> ${location}</p>
                    <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
                </div>
            `
        });

        if (error) {
            console.error("Resend Error:", error);
            return NextResponse.json({ message: "Failed to send enquiry. Please try again later." }, { status: 500 });
        }

        return NextResponse.json({ message: "Thank you for your enquiry! We will get in touch with you soon." }, { status: 200 });

    } catch (error) {
        console.error("Enquiry Server Error:", error);
        return NextResponse.json({ message: "Internal server error. Please try again later." }, { status: 500 });
    }
}
