import { SignJWT, jwtVerify, JWTPayload } from "jose";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-in-production",
);

// ============ PASSWORD HASHING ============
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(
  password: string,
  hashedPassword: string,
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

export async function verifyToken(token: string): Promise<JWTPayload | null> {
  try {
    const verified = await jwtVerify(token, JWT_SECRET);
    return verified.payload;
  } catch {
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
  const year = new Date().getFullYear();

  // Split OTP into individual digits for visual display
  const otpDigits = otp
    .split("")
    .map(
      (d) =>
        `<td style="padding:0 4px;">
           <div style="width:44px;height:56px;background:#fff5f5;border:2px solid #D90B1C;
                       border-radius:10px;text-align:center;line-height:56px;
                       font-size:28px;font-weight:900;color:#D90B1C;
                       font-family:Arial,Helvetica,sans-serif;">
             ${d}
           </div>
         </td>`
    )
    .join("");

  const socialLinks = [
    { label: "Instagram", url: "https://instagram.com/growthikmedia",       icon: "📸" },
    { label: "LinkedIn",  url: "https://linkedin.com/company/growthikmedia", icon: "💼" },
    { label: "YouTube",   url: "https://youtube.com/@growthikmedia",         icon: "▶️" },
    { label: "Website",   url: "https://www.growthikmedia.com",              icon: "🌐" },
  ]
    .map(
      (s) =>
        `<a href="${s.url}" target="_blank" rel="noopener"
            style="display:inline-block;margin:0 5px;color:#94a3b8;font-size:11px;
                   font-family:Arial,sans-serif;text-decoration:none;">
           ${s.icon}&nbsp;${s.label}
         </a>`
    )
    .join("");

  const html = `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Login OTP — Growthik Media</title>
  <style>
    @media only screen and (max-width:600px){
      .email-card { width:100% !important; border-radius:0 !important; }
      .otp-cell div { width:36px !important; height:46px !important; line-height:46px !important; font-size:22px !important; }
    }
  </style>
</head>
<body style="margin:0;padding:0;background:#f1f5f9;">

<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f1f5f9;">
<tr><td align="center" style="padding:28px 12px 40px;">

  <table class="email-card" width="560" cellpadding="0" cellspacing="0" border="0"
         style="max-width:560px;width:100%;background:#fff;border-radius:16px;
                overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.10);">

    <!-- Header -->
    <tr>
      <td style="background:linear-gradient(135deg,#D90B1C 0%,#A3081A 100%);
                 padding:28px 40px 22px;text-align:center;">
        <span style="font-size:26px;font-weight:900;color:#fff;
                     font-family:Arial,Helvetica,sans-serif;letter-spacing:-0.5px;">Growthik</span>
        <span style="font-size:26px;font-weight:400;color:rgba(255,255,255,0.75);
                     font-family:Arial,Helvetica,sans-serif;">&nbsp;Media</span>
        <br>
        <span style="font-size:10px;color:rgba(255,255,255,0.6);letter-spacing:2px;
                     text-transform:uppercase;font-family:Arial,sans-serif;">
          Admin Portal Security
        </span>
      </td>
    </tr>

    <!-- Lock icon + heading -->
    <tr>
      <td style="padding:36px 40px 0;text-align:center;">
        <div style="width:64px;height:64px;background:#fff5f5;border-radius:50%;
                    margin:0 auto 16px;display:flex;align-items:center;
                    justify-content:center;border:2px solid #fecaca;">
          <span style="font-size:28px;line-height:64px;">🔐</span>
        </div>
        <h1 style="margin:0 0 8px;font-size:22px;font-weight:900;color:#1e293b;
                   font-family:Arial,Helvetica,sans-serif;">Login Verification</h1>
        <p style="margin:0;font-size:13px;color:#64748b;font-family:Arial,sans-serif;line-height:1.6;">
          Your one-time password for the Growthik Media admin portal.
        </p>
      </td>
    </tr>

    <!-- OTP digit display -->
    <tr>
      <td style="padding:28px 40px 8px;text-align:center;">
        <table cellpadding="0" cellspacing="0" border="0" style="margin:0 auto;">
          <tr class="otp-cell">${otpDigits}</tr>
        </table>
        <p style="margin:16px 0 0;font-size:12px;color:#94a3b8;font-family:Arial,sans-serif;">
          ⏱ Valid for <strong style="color:#1e293b;">10 minutes</strong> only
        </p>
      </td>
    </tr>

    <!-- Security warning -->
    <tr>
      <td style="padding:20px 40px 36px;">
        <table width="100%" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;
                       padding:16px 20px;">
              <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#64748b;
                         text-transform:uppercase;letter-spacing:0.8px;font-family:Arial,sans-serif;">
                🛡 Security Notice
              </p>
              <p style="margin:0;font-size:12px;color:#64748b;line-height:1.6;font-family:Arial,sans-serif;">
                If you did not request this OTP, your account may be at risk.
                Please change your password immediately and contact
                <a href="mailto:info@growthikmedia.com"
                   style="color:#D90B1C;text-decoration:none;">info@growthikmedia.com</a>.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>

    <!-- Contact strip -->
    <tr>
      <td style="background:#1e293b;padding:18px 32px;text-align:center;">
        <div style="font-size:12px;color:#94a3b8;font-family:Arial,sans-serif;">
          <a href="mailto:info@growthikmedia.com" style="color:#fca5a5;text-decoration:none;">
            ✉&nbsp;info@growthikmedia.com
          </a>
          &nbsp;|&nbsp;
          <a href="tel:+918055754054" style="color:#94a3b8;text-decoration:none;">
            📞&nbsp;+91 80557 54054
          </a>
        </div>
      </td>
    </tr>

    <!-- Social links -->
    <tr>
      <td style="background:#0f172a;padding:14px 28px 18px;text-align:center;">
        <div style="font-size:9px;font-weight:700;color:#475569;letter-spacing:2px;
                    text-transform:uppercase;font-family:Arial,sans-serif;margin-bottom:8px;">
          Follow Us
        </div>
        <div style="line-height:2.2;">${socialLinks}</div>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td style="background:#0f172a;padding:0 28px 18px;text-align:center;
                 border-top:1px solid #1e293b;">
        <p style="font-size:10px;color:#334155;font-family:Arial,sans-serif;margin:0;">
          &copy; ${year} Growthik Media. All rights reserved.
        </p>
      </td>
    </tr>

  </table>

</td></tr>
</table>
</body>
</html>`;

  try {
    await emailTransporter.sendMail({
      from:    process.env.EMAIL_FROM || `"Growthik Media" <noreply@growthikmedia.com>`,
      to:      email,
      subject: "🔐 Your Growthik Media Login OTP",
      html,
    });
    return true;
  } catch (error) {
    console.error("OTP email sending failed:", error);
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
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
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
