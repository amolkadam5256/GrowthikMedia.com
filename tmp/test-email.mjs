import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

console.log('Testing SMTP connection...');
console.log('SMTP_USER:', SMTP_USER ? 'Present' : 'MISSING');
console.log('SMTP_PASS:', SMTP_PASS ? 'Present' : 'MISSING');

if (!SMTP_USER || !SMTP_PASS) {
  console.error('❌ Skipping test: Missing credentials in .env');
  process.exit(1);
}

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Connection error:', error);
  } else {
    console.log('✅ Server is ready to take our messages');
  }
  process.exit(0);
});
