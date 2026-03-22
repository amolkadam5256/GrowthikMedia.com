"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  Send, 
  Users, 
  CheckCircle2, 
  Clock, 
  FileText, 
  Calendar, 
  Bot,
  Copy,
  Check,
  ChevronRight,
  Info,
  ExternalLink
} from "lucide-react";

interface EmailTemplate {
  id: string;
  title: string;
  icon: any;
  userVersion: {
    subject: string;
    body: string;
  };
  adminVersion: {
    subject: string;
    body: string;
  };
}

const COMPANY_INFO = {
  name: "Growthik Media",
  phone: "+91 80557 54054",
  email: "info@growthikmedia.com",
  adminEmails: ["amolkadam1274@gmail.com", "growthikmedia@gmail.com"],
  founder: "Amol Kadam",
  website: "www.growthikmedia.com",
};

const TEMPLATES: EmailTemplate[] = [
  {
    id: "general",
    title: "General Inquiry",
    icon: Mail,
    userVersion: {
      subject: "We've received your enquiry | Growthik Media",
      body: `Hi [Name],\r\n\r\nThank you for reaching out to Growthik Media!\r\n\r\nWe've received your message regarding [Service/Subject] and our team is already reviewing it. You can expect a detailed response from one of our growth strategists within 24 business hours.\r\n\r\nIn the meantime, feel free to explore our portfolio here: https://www.growthikmedia.com/portfolio\r\n\r\nBest regards,\r\n\r\nAmol Kadam\r\nFounder, Growthik Media\r\n${COMPANY_INFO.phone}\r\n${COMPANY_INFO.website}`,
    },
    adminVersion: {
      subject: "🔴 New Website Enquiry: [Name]",
      body: `You have a new general inquiry from the website.\r\n\r\n-- DETAILS --\r\nName: [Name]\r\nEmail: [Email]\r\nPhone: [Phone]\r\nSubject: [Subject]\r\nMessage: [Message]\r\n\r\n-- ACTION --\r\nPlease respond to this lead within 4 hours to maximize conversion.`,
    },
  },
  {
    id: "lead-capture",
    title: "Lead Capture",
    icon: Users,
    userVersion: {
      subject: "Welcome to Growthik Media - Let's Scale Your Brand!",
      body: `Hi [Name],\r\n\r\nWelcome to the Growthik family!\r\n\r\nYou've taken the first step toward building a predictable revenue system. We specialize in AI-driven marketing that replaces guesswork with engineering precision.\r\n\r\nI've attached our "Growth Engineering Framework" brief below. We'll be in touch shortly to discuss your specific goals.\r\n\r\nTalk soon,\r\n\r\nAmol Kadam\r\nGrowth Architect\r\n${COMPANY_INFO.phone}`,
    },
    adminVersion: {
      subject: "🔥 HOT LEAD CAPTURED: [Name]",
      body: `A new high-intent lead has been captured via [Form Name].\r\n\r\n-- LEAD INFO --\r\nName: [Name]\r\nCompany: [Company]\r\nInterest: [Service]\r\nContact: [Email] / [Phone]\r\n\r\n-- STRATEGY --\r\nReview their website before calling. Check for SEO gaps and page speed.`,
    },
  },
  {
    id: "lead-confirmation",
    title: "Lead Confirmation",
    icon: CheckCircle2,
    userVersion: {
      subject: "Confirmed: Your Inquiry has been Logged",
      body: `Dear [Name],\r\n\r\nThis email confirms that your inquiry has been successfully logged into our system (Ref ID: #GHK-[ID]).\r\n\r\n-- NEXT STEPS --\r\n1. Technical Review: Our engineers are auditing your digital footprint.\r\n2. Strategy Call: We will reach out to schedule a 15-minute discovery session.\r\n3. ROI Projection: We will prepare a preliminary growth forecast for your brand.\r\n\r\nThank you for choosing Growthik Media.\r\n\r\nBest,\r\nAmol Kadam`,
    },
    adminVersion: {
      subject: "✅ Lead Confirmation Sent: [Name]",
      body: `Confirmation email has been sent to [Name].\r\n\r\n-- INTERNAL CHECKLIST --\r\n[ ] Logged in CRM (Apollo.io)\r\n[ ] Site Audit Started\r\n[ ] Competitor Analysis Initiated\r\n\r\nLead Email: [Email]`,
    },
  },
  {
    id: "follow-up",
    title: "Follow-up Sequence",
    icon: Clock,
    userVersion: {
      subject: "Quick question about your growth strategy",
      body: `Hi [Name],\r\n\r\nI'm following up on our recent communication. I noticed [Specific Note about their site] and wanted to see if you're still looking to scale your revenue this quarter.\r\n\r\nWe recently helped a similar brand in [Industry] achieve a 300% growth ratio in 6 months using our AI SEO framework.\r\n\r\nWould you be open to a 5-minute chat tomorrow?\r\n\r\nRegards,\r\nAmol Kadam`,
    },
    adminVersion: {
      subject: "⏳ Follow-up Alert: No Response from [Name]",
      body: `It's been [X] days since the last contact with [Name].\r\n\r\n-- STATUS --\r\nSequence Stage: Day [2/5/10]\r\nOpen Rate: [Yes/No]\r\n\r\n-- ACTION --\r\nTry reaching out via WhatsApp at ${COMPANY_INFO.phone} if no email response by tomorrow.`,
    },
  },
  {
    id: "quote",
    title: "Quote / Proposal",
    icon: FileText,
    userVersion: {
      subject: "Proposal & Strategic Roadmap | Growthik Media",
      body: `Hi [Name],\r\n\r\nIt was great learning about your vision for [Business Name].\r\n\r\nPlease find our itemized proposal and 6-month strategic roadmap attached. We've tailored this to focus on [Goal 1] and [Goal 2] using our AI-driven approach.\r\n\r\nLet me know if you have any questions about the deliverables.\r\n\r\nExcited to build this with you,\r\n\r\nAmol Kadam`,
    },
    adminVersion: {
      subject: "📊 Proposal Sent to [Name] - Track Engagement",
      body: `Proposal has been delivered to [Email].\r\n\r\n-- TRACKING --\r\nValue: [Price]\r\nProbability: [High/Medium]\r\nExpected Close: [Date]\r\n\r\nSystem: Apollo.io / CRM`,
    },
  },
  {
    id: "meeting",
    title: "Meeting Request",
    icon: Calendar,
    userVersion: {
      subject: "Meeting Confirmed: Growth Strategy Session",
      body: `Hi [Name],\r\n\r\nOur meeting is confirmed for [Time/Date].\r\n\r\n-- AGENDA --\r\n1. Deep dive into current funnel bottlenecks.\r\n2. Reviewing our AI SEO & Performance framework.\r\n3. Defining Q1 success milestones.\r\n\r\nMeeting Link: [Zoom/Meet Link]\r\n\r\nSee you then!\r\nAmol Kadam`,
    },
    adminVersion: {
      subject: "📅 Meeting Scheduled with [Name]",
      body: `New meeting on the calendar with [Name] from [Company].\r\n\r\n-- PREP BRIEF --\r\n- Revenue Goal: [Goal]\r\n- Key Competitor: [Competitor]\r\n- Required Demo: [Service Demo]`,
    },
  },
  {
    id: "ai-prompt",
    title: "AI Prompt Generator",
    icon: Bot,
    userVersion: {
      subject: "Master Prompt: Implementation Guide",
      body: "PASTE THE PROMPT BELOW INTO CLAUDE OR CHATGPT",
    },
    adminVersion: {
      subject: "Implementation Script",
      body: "ACT AS: Growth Engineering Specialist\r\nTASK: Generate a sequence of 7 emails for Growthik Media leads...\r\nCONTEXT: Use +91 80557 54054 and info@growthikmedia.com as contact info.",
    },
  },
];

export default function EmailTemplateSystem() {
  const [activeTab, setActiveTab] = useState(TEMPLATES[0].id);
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const activeTemplate = TEMPLATES.find((t) => t.id === activeTab) || TEMPLATES[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(id);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 bg-gray-50 dark:bg-black min-h-screen font-sans">
      {/* Header */}
      <div className="mb-12">
        <div className="flex items-center gap-3 text-red-600 mb-2">
          <div className="w-8 h-1 bg-red-600 rounded-full" />
          <span className="font-black uppercase tracking-[0.2em] text-sm">Communication Engine</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white uppercase tracking-tight">
          Email <span className="text-red-600">Template</span> System
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mt-4 text-lg max-w-2xl font-medium">
          Professional lead management infrastructure for Growthik Media. 
          Optimized for high-conversion sales cycles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {TEMPLATES.map((template) => (
            <button
              key={template.id}
              onClick={() => setActiveTab(template.id)}
              className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all text-left group ${
                activeTab === template.id
                  ? "bg-red-600 text-white shadow-xl shadow-red-600/20"
                  : "bg-white dark:bg-[#111] text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#1a1a1a]"
              }`}
            >
              <div className={`p-2 rounded-xl transition-colors ${
                activeTab === template.id ? "bg-white/20" : "bg-gray-100 dark:bg-[#222] group-hover:bg-gray-200 dark:group-hover:bg-[#333]"
              }`}>
                <template.icon size={20} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-xs uppercase tracking-widest">{template.title}</p>
              </div>
              <ChevronRight size={16} className={activeTab === template.id ? "opacity-100" : "opacity-0 group-hover:opacity-100 transition-all"} />
            </button>
          ))}

          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-500/5 rounded-3xl border border-blue-100 dark:border-blue-500/20">
             <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-3">
                <Info size={18} />
                <span className="font-bold text-xs uppercase tracking-widest">Internal Sync</span>
             </div>
             <p className="text-xs text-blue-800/70 dark:text-blue-400/70 leading-relaxed font-medium">
                Admin emails are automatically CC'd to:
                <br />
                <span className="text-blue-600 dark:text-blue-300 font-bold">amolkadam1274@gmail.com</span>
             </p>
          </div>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-9 space-y-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {activeTab === "ai-prompt" ? (
                 <AIPromptTab key="ai-prompt-tab" template={activeTemplate} onCopy={handleCopy} copyStatus={copyStatus} />
              ) : (
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                  {/* User Version */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                       <h3 className="font-black text-gray-900 dark:text-white uppercase tracking-wider text-[10px]">A. User Version (Outbound)</h3>
                       <span className="text-[10px] font-bold text-gray-400 bg-gray-100 dark:bg-[#111] px-2 py-1 rounded-full">SENT FIRST</span>
                    </div>
                    <EmailCard 
                      version="user"
                      template={activeTemplate.userVersion} 
                      onCopy={(text) => handleCopy(text, `${activeTab}-user`)}
                      isCopied={copyStatus === `${activeTab}-user`}
                    />
                  </div>

                  {/* Admin Version */}
                  <div className="space-y-4">
                    <div className="flex items-center justify-between px-2">
                       <h3 className="font-black text-gray-900 dark:text-white uppercase tracking-wider text-[10px]">B. Admin Version (Internal)</h3>
                       <span className="text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-1 rounded-full">TEAM ALERT</span>
                    </div>
                    <EmailCard 
                      version="admin"
                      template={activeTemplate.adminVersion} 
                      onCopy={(text) => handleCopy(text, `${activeTab}-admin`)}
                      isCopied={copyStatus === `${activeTab}-admin`}
                    />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function EmailCard({ template, onCopy, isCopied, version }: { template: any, onCopy: (text: string) => void, isCopied: boolean, version: "user" | "admin" }) {
  return (
    <div className={`rounded-3xl border bg-white dark:bg-[#0a0a0a] shadow-2xl transition-all overflow-hidden h-full ${
      version === "admin" ? "border-red-600/20" : "border-gray-200 dark:border-white/10"
    }`}>
      {/* Subject Line */}
      <div className="p-6 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/2">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-2">Subject Line</p>
        <div className="flex items-center justify-between gap-4">
          <p className="text-gray-900 dark:text-white font-bold text-sm">{template.subject}</p>
          <button 
            onClick={() => onCopy(template.subject)}
            className="p-2 hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-colors text-gray-400 shrink-0"
          >
            {isCopied ? <Check size={16} className="text-green-500" /> : <Copy size={16} />}
          </button>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 relative">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">Email Body</p>
        <div className="bg-gray-50 dark:bg-[#111] rounded-2xl p-6 font-mono text-xs text-gray-600 dark:text-gray-300 whitespace-pre-wrap leading-relaxed border border-gray-100 dark:border-white/5 min-h-[400px]">
          {template.body}
        </div>
        
        <button 
          onClick={() => onCopy(template.body)}
          className="absolute bottom-10 right-10 flex items-center gap-2 bg-gray-900 dark:bg-white text-white dark:text-black px-4 py-2 rounded-xl font-bold text-[10px] shadow-xl active:scale-95 transition-all"
        >
          {isCopied ? (
            <>
              <Check size={12} />
              COPIED!
            </>
          ) : (
            <>
              <Copy size={12} />
              COPY BODY
            </>
          )}
        </button>
      </div>

      {/* Footer Info */}
      <div className="p-4 px-6 bg-gray-50/30 dark:bg-white/1 flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
         <span>Format: HTML/TEXT</span>
         {version === "admin" ? (
           <span className="text-red-500">To: Amol Kadam Team</span>
         ) : (
           <span>From: Growthik Media System</span>
         )}
      </div>
    </div>
  );
}

function AIPromptTab({ template, onCopy, copyStatus }: { template: any, onCopy: (text: string, id: string) => void, copyStatus: string | null }) {
  const MASTER_PROMPT = `
ACT AS: Senior Growth Engineering Copywriter & CRM Specialist
CONTEXT: You are optimizing the communication funnel for Growthik Media (Founder: Amol Kadam).
COMPANY INFO:
- Agency: Growthik Media
- Phone: +91 80557 54054
- Primary Email: info@growthikmedia.com
- Admin/Lead Email: amolkadam1274@gmail.com
- Website: www.growthikmedia.com
- Ethos: We replace guesswork with engineering precision.

TASK:
Improve the tone, clarity, and conversion potential of the following 7 email templates:
1. General Inquiry
2. Lead Capture
3. Lead Confirmation
4. Follow-up Sequence
5. Quote / Proposal
6. Meeting Request
7. No-Response Recovery

GUIDELINES:
- Keep it professional, technical, yet highly persuasive.
- Use the "Growth Engineering" vocabulary (predictable revenue, AI-driven, engineering precision, ROI projection).
- Ensure every email has a clear Call to Action (CTA).
- Format: User version (Outbound) followed by Admin version (Internal Alert).
- Sign-off: Use Amol Kadam's professional signature.

OUTPUT FORMAT:
Provide the subject lines and bodies in markdown format, ready to be pasted into a CRM like Apollo.io.
`;

  return (
    <div className="space-y-6">
       <div className="bg-red-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl overflow-hidden relative group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
             <Bot size={200} />
          </div>
          <div className="relative z-10 space-y-4">
             <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">AI Master <span className="opacity-60">Prompt</span></h2>
             <p className="text-red-100 text-lg max-w-xl font-medium">
                Copy this prompt and paste it into Claude, ChatGPT, or Perplexity to generate highly customized, 
                high-converting email variants for any industry.
             </p>
             <button 
                onClick={() => onCopy(MASTER_PROMPT, "master-prompt")}
                className="inline-flex items-center gap-3 bg-white text-red-600 px-6 py-4 rounded-2xl font-black uppercase tracking-widest text-sm shadow-xl hover:bg-gray-100 transition-all active:scale-95"
             >
                {copyStatus === "master-prompt" ? (
                   <>
                      <Check size={18} />
                      PROMPT COPIED!
                   </>
                ) : (
                  <>
                    <Copy size={18} />
                    COPY MASTER PROMPT
                  </>
                )}
             </button>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-[#0a0a0a] rounded-3xl border border-gray-100 dark:border-white/10">
             <div className="w-10 h-10 bg-red-600/10 text-red-600 rounded-xl flex items-center justify-center mb-4">
                <ExternalLink size={20} />
             </div>
             <h4 className="font-bold text-gray-900 dark:text-white mb-2 uppercase text-[10px] tracking-widest">Step 1: Copy Prompt</h4>
             <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Click the button above to copy the Growthik Media context prompt.</p>
          </div>
          <div className="p-6 bg-white dark:bg-[#0a0a0a] rounded-3xl border border-gray-100 dark:border-white/10">
             <div className="w-10 h-10 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Bot size={20} className="w-5 h-5" />
             </div>
             <h4 className="font-bold text-gray-900 dark:text-white mb-2 uppercase text-[10px] tracking-widest">Step 2: Use AI</h4>
             <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Paste into your preferred AI tool to get optimized variants.</p>
          </div>
          <div className="p-6 bg-white dark:bg-[#0a0a0a] rounded-3xl border border-gray-100 dark:border-white/10">
             <div className="w-10 h-10 bg-green-600/10 text-green-600 rounded-xl flex items-center justify-center mb-4">
                <Send size={20} />
             </div>
             <h4 className="font-bold text-gray-900 dark:text-white mb-2 uppercase text-[10px] tracking-widest">Step 3: Deploy</h4>
             <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Implement in Apollo.io or your CRM to automate your funnel.</p>
          </div>
       </div>
    </div>
  );
}
