"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, Send, Sparkles, Loader2 } from "lucide-react";

const STEPS = {
  IDENTIFY: 1, // Start with Email or Phone
  COLLECT_SECOND: 2, // Collect the missing identity (phone if email, or vice versa)
  NAME: 3,
  SERVICE: 4,
  COMPLETED: 5,
};

const SERVICES = ["SEO", "Paid Ads", "Social Media", "Website", "Not Sure"];

const ProgressiveLeadCapture = () => {
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    identifier: "", // Helper for first input
    email: "",
    phone: "",
    name: "",
    service: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [hasSkipped, setHasSkipped] = useState(false);

  const validateIdentifier = (val: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!val.trim()) return "Identification is required";
    if (val.includes("@")) {
      return emailRegex.test(val) ? null : "Please enter a valid email address";
    }
    const cleanPhone = val.replace(/\D/g, "");
    return cleanPhone.length === 10
      ? null
      : "Please enter a valid 10-digit number";
  };

  useEffect(() => {
    // 1. Initial Logic: Check local flag
    const isCompleted = localStorage.getItem("lead_completed") === "true";
    if (isCompleted) return;

    // 2. Logic: Resume from progress OR start fresh
    const savedEmail = localStorage.getItem("lead_email");
    const savedPhone = localStorage.getItem("lead_phone");
    const savedName = localStorage.getItem("lead_name");

    setFormData({
      identifier: savedEmail || savedPhone || "",
      email: savedEmail || "",
      phone: savedPhone || "",
      name: savedName || "",
      service: "",
    });

    let startStep = STEPS.IDENTIFY;
    if ((savedEmail || savedPhone) && !(savedEmail && savedPhone))
      startStep = STEPS.COLLECT_SECOND;
    else if (savedEmail && savedPhone && !savedName) startStep = STEPS.NAME;
    else if (savedEmail && savedPhone && savedName) startStep = STEPS.SERVICE;

    // 3. Logic: Time Gap - Start after 15s (1st visit) or immediately if resuming
    const delay = savedEmail || savedPhone ? 5000 : 15000;
    const timer = setTimeout(() => {
      setCurrentStep(startStep);
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, []);

  const transitionToStep = (nextStep: number, delay = 800) => {
    setIsVisible(false);
    setTimeout(() => {
      setCurrentStep(nextStep);
      setIsVisible(true);
    }, delay);
  };

  const handleIdentityCheck = async () => {
    setError(null);
    const validationError = validateIdentifier(formData.identifier);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch("/api/leads/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ identifier: formData.identifier }),
      });
      const data = await res.json();

      if (data.exists) {
        // Business Logic: If user exists, stop and mark as completed
        setFormData((prev) => ({
          ...prev,
          name: data.name || prev.name,
          email: data.email || prev.email,
          phone: data.phone || prev.phone,
        }));
        localStorage.setItem("lead_completed", "true");
        setCurrentStep(STEPS.COMPLETED);
        setTimeout(() => setIsVisible(false), 3000);
      } else {
        // User is new: Determine what they entered
        const isEmail = formData.identifier.includes("@");
        if (isEmail) {
          setFormData((prev) => ({ ...prev, email: formData.identifier }));
          localStorage.setItem("lead_email", formData.identifier);
        } else {
          setFormData((prev) => ({ ...prev, phone: formData.identifier }));
          localStorage.setItem("lead_phone", formData.identifier);
        }

        // Strategy: Ask for the missing one after a 5s gap (short, since we just started)
        setIsVisible(false);
        setTimeout(() => {
          transitionToStep(STEPS.COLLECT_SECOND, 0);
        }, 5000);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSecondIdSubmit = () => {
    setError(null);
    const isMissingEmail = !formData.email;
    const inputVal = formData.identifier;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!inputVal.trim()) {
      setError(isMissingEmail ? "Email is required" : "Phone is required");
      return;
    }

    if (isMissingEmail) {
      if (!emailRegex.test(inputVal)) {
        setError("Please enter a valid email address");
        return;
      }
      setFormData((prev) => ({ ...prev, email: inputVal, identifier: "" }));
      localStorage.setItem("lead_email", inputVal);
    } else {
      const cleanPhone = inputVal.replace(/\D/g, "");
      if (cleanPhone.length !== 10) {
        setError("Please enter a valid 10-digit number");
        return;
      }
      setFormData((prev) => ({ ...prev, phone: cleanPhone, identifier: "" }));
      localStorage.setItem("lead_phone", cleanPhone);
    }

    // Move to Name step after a 30s gap
    setIsVisible(false);
    setTimeout(() => {
      transitionToStep(STEPS.NAME, 0);
    }, 30000);
  };

  const handleNameSubmit = () => {
    setError(null);
    if (formData.name.trim().length < 2) {
      setError("Please enter your full name (min 2 characters)");
      return;
    }
    localStorage.setItem("lead_name", formData.name);

    // Time gap logic: Wait 60s (1 min) before asking for service
    setIsVisible(false);
    setTimeout(() => {
      transitionToStep(STEPS.SERVICE, 0);
    }, 60000); // 1 min Gap
  };

  const handleFinalSubmit = async () => {
    setError(null);
    if (!formData.service) return;

    setIsLoading(true);
    try {
      await fetch("/api/leads/save", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone.replace(/\D/g, ""),
          service: formData.service,
        }),
      });

      localStorage.setItem("lead_completed", "true");
      setCurrentStep(STEPS.COMPLETED);
      setTimeout(() => setIsVisible(false), 3000);
    } catch (err) {
      setError("Failed to save. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);

    // If they close on the very first step WITHOUT filling anything
    if (currentStep === STEPS.IDENTIFY && !formData.identifier) {
      setTimeout(() => {
        const isCompleted = localStorage.getItem("lead_completed") === "true";
        if (!isCompleted) setIsVisible(true);
      }, 10000); // 10 sec retry for empty first step
      return;
    }

    // Default retry for other steps (partial fills)
    if (!hasSkipped) {
      setHasSkipped(true);
      setTimeout(() => {
        const isCompleted = localStorage.getItem("lead_completed") === "true";
        if (!isCompleted) setIsVisible(true);
      }, 60000);
    }
  };

  if (!currentStep) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9, x: 20 }}
          animate={
            error
              ? {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  x: [0, -10, 10, -10, 10, 0],
                  transition: { duration: 0.4 },
                }
              : { opacity: 1, y: 0, scale: 1, x: 0 }
          }
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-9998 w-[320px] md:w-[380px]"
        >
          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] overflow-hidden">
            {/* Progress Bar */}
            <div className="h-1.5 w-full bg-gray-100 dark:bg-white/5 flex">
              <div
                className="h-full bg-[#d90b1c] transition-all duration-700"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>

            <div className="p-6 relative">
              {!isLoading && (
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              )}

              <AnimatePresence mode="wait">
                {currentStep === STEPS.IDENTIFY && (
                  <motion.div
                    key="step-identity"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-[#d90b1c]">
                      <Sparkles size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Welcome
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-[1.3]">
                      Want to scale your business? Enter your Email or Phone to
                      start.
                    </h3>
                    <div className="relative">
                      <input
                        autoFocus
                        type="text"
                        placeholder="Email or Phone Number"
                        value={formData.identifier}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            identifier: e.target.value,
                          });
                          if (error) setError(null);
                        }}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          !isLoading &&
                          handleIdentityCheck()
                        }
                        className={`w-full bg-gray-50 dark:bg-white/5 border ${error ? "border-red-500 shadow-[0_0_0_1px_rgba(239,68,68,0.5)]" : "border-gray-200 dark:border-white/10"} rounded-xl px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-[#d90b1c] transition-all pr-12`}
                      />
                      <button
                        onClick={handleIdentityCheck}
                        disabled={isLoading || !formData.identifier.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#d90b1c] text-white rounded-lg disabled:opacity-30 transition-all"
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <ArrowRight size={18} />
                        )}
                      </button>
                    </div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-medium text-red-500 mt-1"
                      >
                        {error}
                      </motion.p>
                    )}
                  </motion.div>
                )}

                {currentStep === STEPS.COLLECT_SECOND && (
                  <motion.div
                    key="step-second-id"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-[#d90b1c]">
                      <Sparkles size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Almost there!
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-[1.3]">
                      {formData.email
                        ? "Got your email! What's a good phone number to reach you?"
                        : "Got your phone! What's the best email for you?"}
                    </h3>
                    <div className="relative">
                      <input
                        autoFocus
                        type={formData.email ? "tel" : "email"}
                        placeholder={
                          formData.email ? "Phone Number" : "Email Address"
                        }
                        value={formData.identifier}
                        onChange={(e) => {
                          setFormData({
                            ...formData,
                            identifier: e.target.value,
                          });
                          if (error) setError(null);
                        }}
                        onKeyDown={(e) =>
                          e.key === "Enter" &&
                          !isLoading &&
                          handleSecondIdSubmit()
                        }
                        className={`w-full bg-gray-50 dark:bg-white/5 border ${error ? "border-red-500 shadow-[0_0_0_1px_rgba(239,68,68,0.5)]" : "border-gray-200 dark:border-white/10"} rounded-xl px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-[#d90b1c] transition-all pr-12`}
                      />
                      <button
                        onClick={handleSecondIdSubmit}
                        disabled={isLoading || !formData.identifier.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#d90b1c] text-white rounded-lg disabled:opacity-30 transition-all"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-medium text-red-500 mt-1"
                      >
                        {error}
                      </motion.p>
                    )}
                  </motion.div>
                )}

                {currentStep === STEPS.NAME && (
                  <motion.div
                    key="step-name"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-[#d90b1c]">
                      <Sparkles size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        Nice to meet you!
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      What should we call you?
                    </h3>
                    <div className="relative">
                      <input
                        autoFocus
                        type="text"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (error) setError(null);
                        }}
                        onKeyDown={(e) =>
                          e.key === "Enter" && handleNameSubmit()
                        }
                        className={`w-full bg-gray-50 dark:bg-white/5 border ${error ? "border-red-500 shadow-[0_0_0_1px_rgba(239,68,68,0.5)]" : "border-gray-200 dark:border-white/10"} rounded-xl px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-[#d90b1c] transition-all pr-12`}
                      />
                      <button
                        onClick={handleNameSubmit}
                        disabled={!formData.name.trim()}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#d90b1c] text-white rounded-lg disabled:opacity-30 transition-all"
                      >
                        <ArrowRight size={18} />
                      </button>
                    </div>
                    {error && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs font-medium text-red-500 mt-1"
                      >
                        {error}
                      </motion.p>
                    )}
                  </motion.div>
                )}

                {currentStep === STEPS.SERVICE && (
                  <motion.div
                    key="step-service"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-[#d90b1c]">
                      <Sparkles size={18} />
                      <span className="text-xs font-bold uppercase tracking-wider">
                        One Last Thing
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                      Which service are you interested in,{" "}
                      {formData.name.split(" ")[0]}?
                    </h3>
                    <div className="space-y-3">
                      <select
                        value={formData.service}
                        onChange={(e) => {
                          setFormData({ ...formData, service: e.target.value });
                          if (error) setError(null);
                        }}
                        className={`w-full bg-gray-50 dark:bg-white/5 border ${error ? "border-red-500 shadow-[0_0_0_1px_rgba(239,68,68,0.5)]" : "border-gray-200 dark:border-white/10"} rounded-xl px-4 py-3 text-gray-900 dark:text-white outline-none focus:border-[#d90b1c] transition-all appearance-none cursor-pointer`}
                      >
                        <option value="" disabled>
                          Select interest...
                        </option>
                        {SERVICES.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <button
                        onClick={handleFinalSubmit}
                        disabled={isLoading || !formData.service}
                        className="w-full py-3 bg-[#d90b1c] text-white rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
                      >
                        {isLoading ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <>
                            Submit <Send size={18} />
                          </>
                        )}
                      </button>
                      {error && (
                        <p className="text-xs font-medium text-red-500 text-center">
                          {error}
                        </p>
                      )}
                    </div>
                  </motion.div>
                )}

                {currentStep === STEPS.COMPLETED && (
                  <motion.div
                    key="step-complete"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-4 text-center space-y-3"
                  >
                    <div className="w-16 h-16 bg-green-100 dark:bg-green-500/10 text-green-600 dark:text-green-400 rounded-full flex items-center justify-center mx-auto">
                      <Check size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {formData.service
                        ? `Thanks, ${formData.name.split(" ")[0]}!`
                        : `Welcome back again, ${formData.name.split(" ")[0]}!`}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {formData.service
                        ? "We've received your inquiry and will be in touch shortly."
                        : "Great to see you! We already have your details on file."}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProgressiveLeadCapture;
