import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production"
);

const JWT_EXPIRATION = "7d"; // 7 days

// ============ PASSWORD HASHING ============
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// ============ JWT TOKEN ============
export async function createToken(payload: {
  id: string;
  email: string;
  role: string;
}): Promise<string> {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(JWT_SECRET);

  return token;
}

export async function verifyToken(token: string): Promise<any> {
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    return verified.payload;
  } catch (error) {
    return null;
  }
}

// ============ OTP GENERATION ============
export function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export function getOTPExpiration(): Date {
  const now = new Date();
  return new Date(now.getTime() + 10 * 60 * 1000); // 10 minutes
}

// ============ EMAIL SERVICE ============
const emailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function sendOTPEmail(email: string, otp: string) {
  try {
    await emailTransporter.sendMail({
      from: process.env.EMAIL_FROM || "noreply@growthikmedia.com",
      to: email,
      subject: "🔐 Your Growthik Media Login OTP",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 20px; border-radius: 10px;">
          <div style="background: white; padding: 40px; border-radius: 10px; text-align: center;">
            <h1 style="color: #333; margin-bottom: 10px;">🔐 Login Verification</h1>
            <p style="color: #666; font-size: 16px; margin-bottom: 30px;">Your One-Time Password (OTP) is:</p>
            
            <div style="background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; border-radius: 5px; margin-bottom: 30px;">
              <p style="font-size: 32px; font-weight: bold; color: #667eea; letter-spacing: 5px; margin: 0;">${otp}</p>
            </div>
            
            <p style="color: #999; font-size: 14px; margin-bottom: 20px;">This OTP is valid for <strong>10 minutes</strong></p>
            
            <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px;">
              <p style="color: #999; font-size: 12px; margin: 0;">
                If you didn't request this OTP, please ignore this email.
              </p>
              <p style="color: #999; font-size: 12px; margin: 10px 0 0 0;">
                © 2024 Growthik Media. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      `,
    });
    return true;
  } catch (error) {
    console.error("Email sending failed:", error);
    return false;
  }
}

// ============ VALIDATION ============
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validateMobile(mobile: string): boolean {
  // Basic validation for 10 digit mobile number
  const mobileRegex = /^[0-9]{10}$/;
  return mobileRegex.test(mobile.replace(/\D/g, ""));
}

export function validatePassword(password: string): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (password.length < 8) {
    errors.push("Password must be at least 8 characters");
  }
  if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain a number");
  }
  if (!/[!@#$%^&*]/.test(password)) {
    errors.push("Password must contain special character (!@#$%^&*)");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// ============ SECURITY ============
export function generateSecureToken(): string {
  return Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15);
}

export function maskEmail(email: string): string {
  const [name, domain] = email.split("@");
  const maskedName = name.substring(0, 2) + "*".repeat(name.length - 2);
  return `${maskedName}@${domain}`;
}

export function maskMobile(mobile: string): string {
  const digits = mobile.replace(/\D/g, "");
  return `${digits.substring(0, 3)}${"*".repeat(digits.length - 6)}${digits.substring(digits.length - 3)}`;
}
