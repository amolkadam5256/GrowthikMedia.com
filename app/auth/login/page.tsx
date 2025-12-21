"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiPhone, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [identifier, setIdentifier] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!identifier.trim()) {
      setError("Please enter your email or mobile number");
      setLoading(false);
      return;
    }

    // Simulate sending OTP API call
    setTimeout(() => {
      setLoading(false);
      // Store identifier in query or state if needed, or just redirect
      // In real app, you'd likely encryp/hash or pass via secure context
      router.push(
        `/auth/verify-otp?identifier=${encodeURIComponent(identifier)}`
      );
    }, 1500);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold mb-2 text-[var(--color-dark)] dark:text-white uppercase tracking-wider">
          Login
        </h1>
        <p className="text-[var(--color-neutral)] dark:text-gray-400 text-sm">
          Enter your registered email or mobile number to receive an OPT.
        </p>
      </div>

      <form onSubmit={handleSendOtp} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-[var(--color-dark)] dark:text-gray-300 mb-2">
            Email or Mobile Number
          </label>
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <FiMail className="text-[var(--color-neutral)] group-focus-within:text-[var(--color-primary)] transition-colors" />
            </div>
            <input
              type="text"
              placeholder="e.g. user@example.com or +91 9876543210"
              required
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="w-full pl-11 pr-4 py-3.5 bg-[var(--color-neutral)]/5 dark:bg-gray-800 border border-transparent dark:border-gray-700 text-[var(--color-dark)] dark:text-white placeholder-[var(--color-neutral)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]/20 focus:border-[var(--color-primary)] transition-all duration-300"
            />
          </div>
          {error && <p className="text-red-500 text-xs mt-2 ml-1">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-[var(--color-primary)]/30 hover:shadow-[var(--color-primary)]/50 transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg
                className="animate-spin -ml-1 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Sending OTP...</span>
            </>
          ) : (
            <>
              <span>Get OTP</span>
              <FiArrowRight />
            </>
          )}
        </button>
      </form>

      <div className="mt-8 text-center bg-[var(--color-primary)]/5 dark:bg-[var(--color-primary)]/10 p-4 rounded-xl border border-[var(--color-primary)]/10 dark:border-[var(--color-primary)]/20">
        <p className="text-xs text-[var(--color-primary)] dark:text-[var(--color-primary-light)]">
          <strong>Note:</strong> Public registration is disabled. You must have
          an account created by an administrator to log in.
        </p>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/"
          className="text-sm text-[var(--color-neutral)] hover:text-[var(--color-dark)] dark:hover:text-gray-300"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
}
