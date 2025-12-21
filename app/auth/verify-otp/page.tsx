"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { FiLock, FiCheck } from "react-icons/fi";
import Link from "next/link";

export default function VerifyOtpPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [identifier, setIdentifier] = useState("");
  const [timer, setTimer] = useState(300); // 5 minutes

  useEffect(() => {
    const id = searchParams.get("identifier");
    if (id) setIdentifier(id);

    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [searchParams]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.nextSibling && element.value !== "") {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = (e.target as HTMLInputElement)
        .previousSibling as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const otpCode = otp.join("");

    // Simulate verification API call
    setTimeout(() => {
      setLoading(false);
      // Redirect based on role (mock logic)
      router.push("/dashboard");
    }, 1500);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-10">
        <div className="w-16 h-16 bg-[var(--color-primary)]/10 rounded-full flex items-center justify-center mx-auto mb-6 text-[var(--color-primary)]">
          <FiLock className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-bold mb-2 text-[var(--color-dark)] dark:text-white uppercase tracking-wider">
          Verify OTP
        </h1>
        <p className="text-[var(--color-neutral)] dark:text-gray-400 text-sm">
          Enter the 6-digit code sent to <br />
          <span className="font-semibold text-[var(--color-dark)] dark:text-white">
            {identifier || "your email/mobile"}
          </span>
        </p>
      </div>

      <form onSubmit={handleVerify} className="space-y-8">
        <div className="flex justify-center gap-2">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              onFocus={(e) => e.target.select()}
              className="w-12 h-14 border border-[var(--color-neutral)]/40 dark:border-gray-700 rounded-lg text-center text-xl font-bold text-[var(--color-dark)] dark:text-white bg-[var(--color-neutral)]/5 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all"
            />
          ))}
        </div>

        <button
          type="submit"
          disabled={loading || otp.join("").length < 6}
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
              <span>Verifying...</span>
            </>
          ) : (
            <>
              <FiCheck />
              <span>Verify & Login</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-8 text-center">
        <p className="text-sm text-[var(--color-neutral)] mb-2">
          Time remaining: <span className="font-mono">{formatTime(timer)}</span>
        </p>
        <p className="text-sm text-[var(--color-neutral)]">
          Didn&apos;t receive the code?{" "}
          <button
            type="button"
            className="font-semibold text-[var(--color-primary)] hover:underline cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={timer > 0}
            onClick={() => setTimer(300)} // Mock resend
          >
            Resend OTP
          </button>
        </p>
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/auth/login"
          className="text-xs text-[var(--color-neutral)] hover:text-[var(--color-dark)] dark:hover:text-gray-200"
        >
          &larr; Change Email/Mobile
        </Link>
      </div>
    </div>
  );
}
