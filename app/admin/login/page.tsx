"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiShield, FiLock, FiUser, FiArrowRight } from "react-icons/fi";
import Link from "next/link";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (data.success) {
        setLoginSuccess(true);
        router.push("/admin/dashboard");
      } else {
        setError(
          data.details
            ? `${data.error}: ${data.details}`
            : data.error || "Login failed",
        );
      }
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-4">
      <div className="bg-[#1e293b] border border-slate-700/50 rounded-2xl shadow-2xl p-8 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
            <FiShield className="w-8 h-8" />
          </div>
          <h1 className="text-2xl font-bold text-white uppercase tracking-wider">
            Admin Portal
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Restricted Access. Authorized Personnel Only.
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/50 text-red-500 text-sm rounded-lg text-center animate-shake">
            {error}
          </div>
        )}

        {loginSuccess && (
          <div className="mb-4 p-3 bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 text-sm rounded-lg text-center flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            Login Successful! Redirecting...
          </div>
        )}

        <form
          onSubmit={handleLogin}
          className={`space-y-6 ${loginSuccess ? "opacity-50 pointer-events-none" : ""}`}
        >
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <FiUser />
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-red-500 transition-all shadow-inner"
                  placeholder="admin@growthikmedia.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500">
                  <FiLock />
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-[#0f172a] border border-slate-700 rounded-xl text-white focus:outline-none focus:border-red-500 transition-all shadow-inner"
                  placeholder="••••••••"
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20 active:scale-95 disabled:opacity-50"
          >
            {loading ? (
              "Authenticating..."
            ) : (
              <>
                Login to Dashboard <FiArrowRight />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-700/50 text-center">
          <Link
            href="/"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
          >
            Return to Public Website
          </Link>
        </div>
      </div>
    </div>
  );
}
