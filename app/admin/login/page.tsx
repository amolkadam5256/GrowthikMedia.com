"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiShield, FiLock, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState(""); // Email
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [step, setStep] = useState<"identifier" | "otp">("identifier");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Handle identifier submission (Request OTP)
  const handleSendOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: identifier }),
      });
      const data = await res.json();

      if (data.success) {
        setStep("otp");
      } else {
        setError(data.error || "Failed to send OTP");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP submission (Verify OTP)
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const code = otp.join("");
    if (code.length !== 6) {
      setError("Please enter complete OTP");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: identifier, code }),
      });
      const data = await res.json();

      if (data.success) {
        // Redirect to dashboard
        router.push("/admin/dashboard");
        router.refresh();
      } else {
        setError(data.error || "Invalid OTP");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value !== "") {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
            <FiShield className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white uppercase tracking-wider">
            Admin Portal
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Restricted Access. Authorized Personnel Only.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-500 text-sm rounded-lg text-center">
            {error}
          </div>
        )}

        {step === "identifier" ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Admin Email
              </label>
              <input
                type="email"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                placeholder="admin@growthikmedia.com"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                "Sending OTP..."
              ) : (
                <>
                  Send OTP <FiArrowRight />
                </>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label className="block text-center text-sm font-medium text-gray-300 mb-4">
                Enter OTP sent to {identifier}
              </label>
              <div className="flex justify-center gap-2">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength={1}
                    value={data}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                    className="w-10 h-12 border border-gray-600 rounded bg-gray-900 text-white text-center text-lg font-bold focus:border-red-500 focus:outline-none"
                  />
                ))}
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-all flex items-center justify-center gap-2"
            >
              {loading ? (
                "Verifying..."
              ) : (
                <>
                  Verify & Login <FiLock />
                </>
              )}
            </button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setStep("identifier")}
                className="text-xs text-gray-500 hover:text-gray-300"
              >
                Back to Email
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <Link href="/" className="text-xs text-gray-500 hover:text-gray-300">
            &larr; Exit to Admin Login
          </Link>
        </div>
      </div>
    </div>
  );
}
