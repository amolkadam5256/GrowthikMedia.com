"use client";

import { useState, useEffect } from "react";
import {
  Eye,
  EyeOff,
  Mail,
  Phone,
  Lock,
  AlertCircle,
  CheckCircle,
  ArrowRight,
  Zap,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";

type LoginStep = "method" | "email-password" | "otp-request" | "otp-verify";
type AuthMethod = "email" | "mobile";

export default function LoginPage() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState<LoginStep>("method");
  const [authMethod, setAuthMethod] = useState<AuthMethod>("email");
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleRequestOTP = () => {
    setError("");
    setSuccess("");
    setLoading(true);

    setTimeout(() => {
      setSuccess(`OTP sent to your ${authMethod}`);
      setStep("otp-verify");
      setLoading(false);
    }, 1500);
  };

  const handleVerifyOTP = () => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (otp === "123456") {
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          alert("Redirecting to admin dashboard...");
        }, 1000);
      } else {
        setError("Invalid OTP. Try 123456 for demo.");
      }
      setLoading(false);
    }, 1500);
  };

  const handleEmailLogin = () => {
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (password.length >= 6) {
        setSuccess("Login successful! Redirecting...");
        setTimeout(() => {
          alert("Redirecting to admin dashboard...");
        }, 1000);
      } else {
        setError("Invalid credentials");
      }
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full pt-40">
      {/* Main Container */}
      <div className="w-full max-w-md mx-auto">
        {/* Card */}
        <div className="bg-white dark:bg-gray-900 rounded-sm shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#D90B1C] to-[#F22E52] p-6 sm:p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-white/90 dark:text-black text-sm sm:text-lg font-medium">
                Admin Portal
              </h2>
            </div>
          </div>

          {/* Form Container */}
          <div className="p-6 sm:p-8">
            {/* Step Indicator */}
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-[#979DA6] tracking-wider">
                  STEP {step === "method" ? "1" : "2"} OF 2
                </span>
                <span className="text-xs font-semibold text-[#D90B1C]">
                  {step === "method" ? "Choose Method" : "Authenticate"}
                </span>
              </div>
              <div className="flex gap-2">
                <div
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                    step === "method"
                      ? "bg-gradient-to-r from-[#D90B1C] to-[#F22E52]"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                />
                <div
                  className={`h-2 flex-1 rounded-full transition-all duration-500 ${
                    step !== "method"
                      ? "bg-gradient-to-r from-[#D90B1C] to-[#F22E52]"
                      : "bg-gray-200 dark:bg-gray-700"
                  }`}
                />
              </div>
            </div>

            {/* Messages */}
            {error && (
              <div className="mb-5 p-4 rounded-2xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800/50 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-red-700 dark:text-red-300">
                  {error}
                </p>
              </div>
            )}

            {success && (
              <div className="mb-5 p-4 rounded-2xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800/50 flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-300">
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm font-medium text-green-700 dark:text-green-300">
                  {success}
                </p>
              </div>
            )}

            {/* STEP 1: Method Selection */}
            {step === "method" && (
              <div className="space-y-3 sm:space-y-4">
                {/* Email & Password */}
                <label
                  className={`block p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    authMethod === "email"
                      ? "border-[#D90B1C] bg-red-50 dark:bg-[#D90B1C]/10 shadow-lg shadow-[#D90B1C]/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-[#F22E52] dark:hover:border-[#F22E52] bg-white dark:bg-gray-800/50 hover:shadow-md"
                  }`}
                >
                  <input
                    type="radio"
                    value="email"
                    checked={authMethod === "email"}
                    onChange={(e) =>
                      setAuthMethod(e.target.value as AuthMethod)
                    }
                    className="sr-only"
                  />
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        authMethod === "email"
                          ? "bg-[#D90B1C] shadow-lg shadow-[#D90B1C]/30"
                          : "bg-gray-100 dark:bg-gray-700"
                      }`}
                    >
                      <Mail
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          authMethod === "email"
                            ? "text-white"
                            : "text-[#979DA6]"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-bold text-sm sm:text-base mb-1 ${
                          authMethod === "email"
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        Email & Password
                      </p>
                      <p className="text-xs sm:text-sm text-[#979DA6]">
                        Sign in with your email and password
                      </p>
                    </div>
                  </div>
                </label>

                {/* OTP via Phone */}
                <label
                  className={`block p-4 sm:p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                    authMethod === "mobile"
                      ? "border-[#D90B1C] bg-red-50 dark:bg-[#D90B1C]/10 shadow-lg shadow-[#D90B1C]/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-[#F22E52] dark:hover:border-[#F22E52] bg-white dark:bg-gray-800/50 hover:shadow-md"
                  }`}
                >
                  <input
                    type="radio"
                    value="mobile"
                    checked={authMethod === "mobile"}
                    onChange={(e) =>
                      setAuthMethod(e.target.value as AuthMethod)
                    }
                    className="sr-only"
                  />
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`p-3 rounded-xl transition-colors ${
                        authMethod === "mobile"
                          ? "bg-[#D90B1C] shadow-lg shadow-[#D90B1C]/30"
                          : "bg-gray-100 dark:bg-gray-700"
                      }`}
                    >
                      <Phone
                        className={`w-5 h-5 sm:w-6 sm:h-6 ${
                          authMethod === "mobile"
                            ? "text-white"
                            : "text-[#979DA6]"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <p
                        className={`font-bold text-sm sm:text-base mb-1 ${
                          authMethod === "mobile"
                            ? "text-gray-900 dark:text-white"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        OTP via Phone
                      </p>
                      <p className="text-xs sm:text-sm text-[#979DA6]">
                        Verify with a one-time password
                      </p>
                    </div>
                  </div>
                </label>

                <button
                  onClick={() =>
                    setStep(
                      authMethod === "email" ? "email-password" : "otp-request"
                    )
                  }
                  className="w-full mt-6 py-3.5 sm:py-4 bg-gradient-to-r from-[#D90B1C] to-[#F22E52] hover:from-[#F22E52] hover:to-[#D90B1C] text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-xl shadow-[#D90B1C]/40 hover:shadow-2xl hover:shadow-[#F22E52]/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Continue
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}

            {/* STEP 2A: Email & Password */}
            {step === "email-password" && authMethod === "email" && (
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#D90B1C] focus:outline-none transition-all text-sm sm:text-base"
                    placeholder="name@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#D90B1C] focus:outline-none transition-all text-sm sm:text-base"
                      placeholder="••••••••"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-[#979DA6] hover:text-[#D90B1C] transition-colors"
                    >
                      {showPassword ? (
                        <EyeOff className="w-5 h-5" />
                      ) : (
                        <Eye className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleEmailLogin}
                  disabled={loading}
                  className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#D90B1C] to-[#F22E52] hover:from-[#F22E52] hover:to-[#D90B1C] text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#D90B1C]/40 hover:shadow-2xl hover:shadow-[#F22E52]/50 mt-6 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </button>

                <button
                  onClick={() => {
                    setStep("method");
                    setError("");
                  }}
                  className="w-full py-3 text-sm font-semibold text-[#979DA6] hover:text-[#D90B1C] rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  ← Back to Login Methods
                </button>
              </div>
            )}

            {/* STEP 2B: OTP Request */}
            {step === "otp-request" && authMethod === "mobile" && (
              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-bold text-gray-900 dark:text-white mb-2">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    value={identifier}
                    onChange={(e) =>
                      setIdentifier(
                        e.target.value.replace(/\D/g, "").slice(0, 10)
                      )
                    }
                    className="w-full px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#D90B1C] focus:outline-none transition-all text-base sm:text-lg tracking-wider"
                    placeholder="98765XXXXX"
                  />
                  <p className="text-xs text-[#979DA6] mt-2">
                    Enter 10 digit number
                  </p>
                </div>

                <button
                  onClick={handleRequestOTP}
                  disabled={loading || identifier.length !== 10}
                  className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#D90B1C] to-[#F22E52] hover:from-[#F22E52] hover:to-[#D90B1C] text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#D90B1C]/40 hover:shadow-2xl hover:shadow-[#F22E52]/50 mt-6 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                </button>

                <button
                  onClick={() => {
                    setStep("method");
                    setError("");
                  }}
                  className="w-full py-3 text-sm font-semibold text-[#979DA6] hover:text-[#D90B1C] rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  ← Back to Login Methods
                </button>
              </div>
            )}

            {/* STEP 3: OTP Verification */}
            {step === "otp-verify" && (
              <div className="space-y-4 sm:space-y-5">
                <p className="text-sm text-gray-700 dark:text-gray-300 font-medium text-center bg-gray-100 dark:bg-gray-800 p-3 rounded-xl">
                  Enter the 6-digit code sent to{" "}
                  <span className="text-[#D90B1C] font-bold block sm:inline mt-1 sm:mt-0">
                    {identifier}
                  </span>
                </p>

                <div>
                  <label className="block text-sm font-bold text-gray-900 dark:text-white mb-3 text-center">
                    Verification Code
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) =>
                      setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))
                    }
                    maxLength={6}
                    className="w-full px-4 py-4 sm:py-5 rounded-xl sm:rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:border-[#D90B1C] focus:outline-none transition-all text-3xl sm:text-4xl font-mono font-bold text-center tracking-[0.3em] sm:tracking-[0.5em]"
                    placeholder="000000"
                  />
                  <p className="text-xs text-[#979DA6] mt-2 text-center">
                    Demo: Use{" "}
                    <span className="font-bold text-[#D90B1C]">123456</span> to
                    login
                  </p>
                </div>

                <button
                  onClick={handleVerifyOTP}
                  disabled={loading || otp.length !== 6}
                  className="w-full py-3.5 sm:py-4 bg-gradient-to-r from-[#D90B1C] to-[#F22E52] hover:from-[#F22E52] hover:to-[#D90B1C] text-white font-bold rounded-xl sm:rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-[#D90B1C]/40 hover:shadow-2xl hover:shadow-[#F22E52]/50 mt-6 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {loading ? "Verifying..." : "Verify & Login"}
                </button>

                <button
                  onClick={() => {
                    setStep("otp-request");
                    setOtp("");
                    setError("");
                  }}
                  className="w-full py-3 text-sm font-semibold text-[#979DA6] hover:text-[#D90B1C] rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                >
                  ← Request New OTP
                </button>
              </div>
            )}

            {/* Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-xs text-center text-[#979DA6] flex items-center justify-center gap-2">
                <Lock className="w-4 h-4" />
                Only admin users can access this portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
