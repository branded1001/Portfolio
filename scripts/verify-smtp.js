// Safe SMTP verification script. Does not print secrets.
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_PASS;

if (!user || !pass) {
  console.error('Missing GMAIL_USER or GMAIL_PASS in environment.');
  process.exit(2);
}

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: { user, pass },
});

console.log('Verifying SMTP connection (will not reveal credentials)...');
transporter.verify((error, success) => {
  if (error) {
    console.error('SMTP verify failed.');
    // Print concise error message without echoing env values
    console.error(error && error.response ? error.response : error.message);
    process.exit(1);
  } else {
    console.log('SMTP verified: connection successful.');
    process.exit(0);
  }
});
