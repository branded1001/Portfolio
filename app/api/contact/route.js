import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import sgMail from "@sendgrid/mail";

export async function POST(request) {
  const { name, email, message } = await request.json();

  if (!process.env.GMAIL_USER || !process.env.GMAIL_PASS) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing Gmail credentials in environment variables (GMAIL_USER, GMAIL_PASS).",
      },
      { status: 500 }
    );
  }

  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing required fields." }, { status: 400 });
  }

  // If SENDGRID_API_KEY is provided, use SendGrid (recommended for production)
  if (process.env.SENDGRID_API_KEY) {
    try {
      sgMail.setApiKey(process.env.SENDGRID_API_KEY);
      const msg = {
        to: process.env.SENDGRID_TO || process.env.GMAIL_USER,
        from: process.env.SENDGRID_FROM || process.env.SENDGRID_TO || process.env.GMAIL_USER,
        replyTo: email,
        subject: `New Contact Message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
      };

      await sgMail.send(msg);
      return NextResponse.json({ success: true });
    } catch (err) {
      console.error('SendGrid send error:', err && err.message ? err.message : err);
      return NextResponse.json({ success: false, error: 'Failed to send email via SendGrid.', details: err?.message }, { status: 500 });
    }
  }

  // Fallback to Nodemailer (Gmail SMTP)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      // Use the authenticated account as `from` and set user's email as `replyTo`.
      from: process.env.GMAIL_USER,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);

    const authError = err && err.response && typeof err.response === "string" && err.response.includes("535");
    const message = authError
      ? "SMTP authentication failed. Check GMAIL_USER and GMAIL_PASS (use an App Password if 2FA is enabled)."
      : "Failed to send email.";

    return NextResponse.json({ success: false, error: message, details: err?.message }, { status: 500 });
  }
}
