import { Resend } from "resend";

export const sendEmail = async ({ name, email, phone, treatment }) => {
    if (!process.env.RESEND_API_KEY) {
        throw new Error("RESEND_API_KEY not configured");
    }

    // Initialize Resend inside the function, not at module level
    const resend = new Resend(process.env.RESEND_API_KEY);

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
                .label { font-weight: bold; color: #374151; }
                .value { color: #1f2937; background: white; padding: 10px; border-radius: 4px; border-left: 3px solid #ec4899; margin-top: 5px; }
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <h2 style="margin: 0;">New Contact Form Submission</h2>
                    <p style="margin: 5px 0 0 0; opacity: 0.9;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
                </div>
                <div class="content">
                    <div class="field">
                        <div class="label">Name:</div>
                        <div class="value">${name}</div>
                    </div>
                    <div class="field">
                        <div class="label">Email:</div>
                        <div class="value"><a href="mailto:${email}">${email}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">Phone:</div>
                        <div class="value"><a href="tel:+91${phone}">+91 ${phone}</a></div>
                    </div>
                    <div class="field">
                        <div class="label">Treatment Interest:</div>
                        <div class="value">${treatment}</div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        `,
        text: `New Contact Form\n\nName: ${name}\nEmail: ${email}\nPhone: +91 ${phone}\nTreatment: ${treatment}\n\nReceived: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}`
    });

    if (error) {
        throw new Error(`Email failed: ${error.message}`);
    }

    return true;
    
};