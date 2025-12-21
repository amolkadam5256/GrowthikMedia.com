"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiShield, FiLock, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState<"identifier" | "otp">("identifier");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  // Handle identifier submission
  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate Admin Check & OTP Send
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 1000);
  };

  // Handle OTP submission
  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate Verify
    setTimeout(() => {
      setLoading(false);
      router.push("/admin/dashboard");
    }, 1500);
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

        {step === "identifier" ? (
          <form onSubmit={handleSendOtp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Admin Email / ID
              </label>
              <input
                type="text"
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
                "Verifying..."
              ) : (
                <>
                  Authenticate <FiArrowRight />
                </>
              )}
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-6">
            <div>
              <label className="block text-center text-sm font-medium text-gray-300 mb-4">
                Enter Security Code sent to your device
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
                "Accessing..."
              ) : (
                <>
                  Verify Access <FiLock />
                </>
              )}
            </button>
            <div className="text-center">
              <button
                type="button"
                onClick={() => setStep("identifier")}
                className="text-xs text-gray-500 hover:text-gray-300"
              >
                Back to Identifier
              </button>
            </div>
          </form>
        )}

        <div className="mt-8 pt-6 border-t border-gray-700 text-center">
          <Link href="/" className="text-xs text-gray-500 hover:text-gray-300">
            &larr; Exit to Public Site
          </Link>
        </div>
      </div>
    </div>
  );
}
