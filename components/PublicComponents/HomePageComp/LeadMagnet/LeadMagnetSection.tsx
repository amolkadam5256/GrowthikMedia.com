"use client";

import React, { useState } from "react";
import {
  Download,
  FileText,
  BarChart3,
  ArrowRight,
  Mail,
  User,
  Send,
  CheckCircle2,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { motion } from "framer-motion";

const magnets = [
  {
    id: "seo-checklist",
    icon: FileText,
    title: "Free SEO Checklist",
    description:
      "The exact 45-point checklist we use to rank our clients #1 on Google Pune. Complete technical and on-page guide.",
    cta: "Download PDF",
    color: "from-(--color-primary)/10 to-(--color-primary-light)/5",
    iconColor: "text-(--color-primary)",
  },
  {
    id: "ads-audit",
    icon: Download,
    title: "Free Ads Audit PDF",
    description:
      "Identify why your Google or Meta Ads aren't converting. Get actionable fixes for your local Pune business.",
    cta: "Get Free Audit",
    color: "from-(--color-primary)/10 to-(--color-primary-light)/5",
    iconColor: "text-(--color-primary)",
  },
  {
    id: "website-score",
    icon: BarChart3,
    title: "Instant Website Score",
    description:
      "Get a performance and SEO score for your website in under 60 seconds. Know exactly where you stand.",
    cta: "Check Score",
    color: "from-(--color-primary)/10 to-(--color-primary-light)/5",
    iconColor: "text-(--color-primary)",
  },
];

const LeadMagnetSection = () => {
  const [selectedMagnet, setSelectedMagnet] = useState<
    (typeof magnets)[0] | null
  >(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleOpenModal = (magnet: (typeof magnets)[0]) => {
    setSelectedMagnet(magnet);
    setIsSuccess(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "" });
    }, 1500);
  };

  return (
    <section className="py-24 bg-(--surface) relative overflow-hidden border-y border-(--border)">
      {/* Background Decorative Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-linear-to-l from-(--color-primary)/2 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <div className="flex items-center justify-center gap-4 mb-6 px-4 py-2">
            <div className="w-12 h-[2px] bg-(--color-primary)" />
            <span className="text-(--color-primary) font-bold uppercase tracking-[0.3em] text-xs">
              Direct Value
            </span>
            <div className="w-12 h-[2px] bg-(--color-primary)" />
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-(--text-primary) uppercase tracking-tighter mb-6 leading-none">
            Grab Our <br />
            <span className="text-(--color-primary)">Growth Resources</span>
          </h2>
          <p className="text-lg text-(--text-secondary) max-w-2xl mx-auto leading-relaxed">
            Stop guessing and start growing. Access the internal toolkits and
            checklists our team uses to dominate search results in Pune.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {magnets.map((magnet, idx) => (
            <motion.div
              key={magnet.id}
              whileHover={{ y: -10 }}
              className={`bg-(--background) p-8 border-2 border-(--border) hover:border-(--color-primary) transition-all duration-300 group shadow-lg relative flex flex-col h-full overflow-hidden`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Card Accent Glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${magnet.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 bg-linear-to-br from-(--color-primary) to-(--color-primary-light) flex items-center justify-center mb-8 shadow-lg shadow-(--color-primary)/20 group-hover:scale-110 transition-transform duration-500 text-white">
                  <magnet.icon className="w-7 h-7" />
                </div>

                <h3 className="text-2xl font-black text-(--text-primary) uppercase mb-4 tracking-tight leading-tight">
                  {magnet.title}
                </h3>

                <p className="text-(--text-secondary) mb-8 grow leading-relaxed font-medium">
                  {magnet.description}
                </p>

                <Button
                  variant="outline"
                  onClick={() => handleOpenModal(magnet)}
                  className="w-full grow-0 flex items-center justify-center gap-2 font-black uppercase tracking-widest text-xs py-5 border-2 border-(--color-primary)! text-(--color-primary)! hover:bg-(--color-primary)! hover:text-white! transition-all duration-300 rounded-full!"
                >
                  {magnet.cta}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lead Capture Modal */}
      <Modal
        isOpen={!!selectedMagnet}
        onClose={() => setSelectedMagnet(null)}
        title={isSuccess ? "Success!" : `Get ${selectedMagnet?.title}`}
      >
        {!isSuccess ? (
          <form onSubmit={handleSubmit} className="space-y-6">
            <p className="text-(--text-secondary) leading-relaxed">
              Enter your details below and we'll send the{" "}
              <span className="font-bold text-(--text-primary)">
                {selectedMagnet?.title}
              </span>{" "}
              directly to your inbox.
            </p>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-(--text-tertiary)" />
                </div>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  className="w-full pl-12 pr-4 py-4 bg-(--surface-secondary) border border-(--border) focus:border-(--color-primary) outline-hidden text-(--text-primary) font-medium transition-all"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-(--text-tertiary)" />
                </div>
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  className="w-full pl-12 pr-4 py-4 bg-(--surface-secondary) border border-(--border) focus:border-(--color-primary) outline-hidden text-(--text-primary) font-medium transition-all"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 bg-(--color-primary) hover:bg-(--color-primary-light) text-(--text-primary) font-black uppercase tracking-wider text-sm flex items-center justify-center gap-3 shadow-xl transition-all"
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-(--text-primary)/30 border-t-(--text-primary) rounded-full animate-spin" />
              ) : (
                <>
                  Send Me The Resource
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>

            <p className="text-[10px] text-center text-(--text-tertiary) uppercase tracking-widest">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        ) : (
          <div className="text-center py-6 space-y-6">
            <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-black text-(--text-primary) uppercase">
              Check Your Inbox!
            </h4>
            <p className="text-(--text-secondary) leading-relaxed">
              We've just sent the{" "}
              <span className="font-bold">{selectedMagnet?.title}</span> to your
              email address: <br />
              <span className="text-(--text-primary) font-semibold italic">
                {formData.email}
              </span>
            </p>
            <Button
              onClick={() => setSelectedMagnet(null)}
              className="w-full py-4 mt-8 bg-(--text-primary) text-white uppercase font-bold"
            >
              Back to Website
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default LeadMagnetSection;
