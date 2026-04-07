/** @jsxImportSource react */
"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  FiActivity,
  FiAlertCircle,
  FiArrowRight,
  FiAward,
  FiBarChart2,
  FiBookOpen,
  FiClock,
  FiCpu,
  FiExternalLink,
  FiFlag,
  FiGrid,
  FiMail,
  FiMessageSquare,
  FiRefreshCw,
  FiSend,
  FiSettings,
  FiUsers,
} from "react-icons/fi";
import SkeletonDashboard from "./SkeletonDashboard";
import {
  ActivityItem,
  DashboardStats,
  DotStatus,
  MetricCard,
  SystemStatusRow,
} from "@/types/dashboard";

type LoadState = "idle" | "loading" | "refreshing";

const cardShell =
  "rounded-3xl border border-gray-200 bg-white shadow-[0_14px_45px_rgba(17,24,39,0.08)]";

function dotColor(state: DotStatus) {
  if (state === "green") return "bg-emerald-500";
  if (state === "amber") return "bg-amber-400";
  return "bg-rose-500";
}

function statusBadgeColor(status?: string | null) {
  const value = (status || "").toString().toLowerCase();
  if (["new", "hot", "pending"].some((s) => value.includes(s))) {
    return "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200";
  }
  if (["replied", "resolved", "success", "qualified"].some((s) => value.includes(s))) {
    return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200";
  }
  if (["error", "failed"].some((s) => value.includes(s))) {
    return "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200";
  }
  return "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200";
}

const barsFromNumber = (value: number) => {
  if (!value) return [0, 0, 0, 0, 0];
  const seed = Math.max(1, value);
  return [
    (seed % 7) + 3,
    ((seed * 2) % 9) + 4,
    ((seed * 3) % 8) + 5,
    ((seed * 5) % 10) + 4,
    ((seed * 7) % 6) + 3,
  ];
};

function Sparkline({ values }: { values: number[] }) {
  const max = Math.max(...values, 1);
  return (
    <div className="mt-3 flex items-end gap-1 h-12">
      {values.map((v, idx) => {
        const height = max === 0 ? 6 : Math.max(6, Math.round((v / max) * 52));
        return (
          <div
            key={idx}
            className="flex-1 rounded-md bg-gradient-to-t from-gray-200 dark:from-gray-800 to-gray-300/80 dark:to-gray-700/70"
            style={{ height }}
          />
        );
      })}
    </div>
  );
}

function systemDot(key: string, system: DashboardStats["system"]): DotStatus {
  if (key === "db") return "green";
  if (key === "api")
    return system.apiLatencyMs < 100
      ? "green"
      : system.apiLatencyMs < 500
        ? "amber"
        : "red";
  if (key === "smtp") return system.smtpConnected ? "green" : "red";
  if (key === "cron") return system.googleCronConfigured ? "green" : "amber";
  if (key === "groq") return system.groqConnected ? "green" : "red";
  return "green";
}

export default function DashboardHome() {
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [activity, setActivity] = useState<ActivityItem[]>([]);
  const [loadState, setLoadState] = useState<LoadState>("loading");
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchData = async (initial = false) => {
    setLoadState(initial ? "loading" : "refreshing");
    try {
      const [statsRes, activityRes] = await Promise.all([
        fetch("/api/admin/dashboard/stats"),
        fetch("/api/admin/dashboard/activity"),
      ]);

      if (!statsRes.ok || !activityRes.ok) {
        throw new Error("API error");
      }

      const statsJson: DashboardStats = await statsRes.json();
      const activityJson = await activityRes.json();

      setStats(statsJson);
      setActivity(activityJson.items || activityJson || []);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      console.error("Dashboard fetch failed", err);
      setError("Unable to load dashboard right now. We'll retry automatically.");
    } finally {
      setLoadState("idle");
    }
  };

  useEffect(() => {
    fetchData(true);
    const interval = setInterval(() => fetchData(false), 60_000);
    return () => clearInterval(interval);
  }, []);

  const keyCards: MetricCard[] = useMemo(() => {
    if (!stats) return [];
    return [
      {
        label: "Total Inquiries",
        value: stats.inquiries.total,
        subLabel: `New this week - ${stats.inquiries.thisWeek}`,
        sparkline: barsFromNumber(stats.inquiries.total),
      },
      {
        label: "AI Chat Leads",
        value: stats.chatLeads.total,
        subLabel: `High intent - ${stats.chatLeads.highIntent}`,
        sparkline: barsFromNumber(stats.chatLeads.total),
      },
      {
        label: "Portfolio Projects",
        value: stats.portfolioProjects.total,
        subLabel: `Featured - ${stats.portfolioProjects.featured}`,
        sparkline: barsFromNumber(stats.portfolioProjects.total),
      },
      {
        label: "Blog Posts",
        value: stats.blogPosts.total,
        subLabel: `Published - ${stats.blogPosts.published}`,
        sparkline: barsFromNumber(stats.blogPosts.total),
      },
    ];
  }, [stats]);

  const secondaryCards = useMemo(() => {
    if (!stats) return [];
    return [
      {
        label: "Google Reviews Replied",
        value: stats.googleReviews.totalReplied,
        subLabel: `${stats.googleReviews.pendingErrors} pending errors`,
      },
      {
        label: "Avg API Latency",
        value: `${stats.system.apiLatencyMs} ms`,
        subLabel: "Live probe",
      },
      {
        label: "Active Admins",
        value: stats.admins.active,
        subLabel: `${stats.admins.superAdmins} super admins`,
      },
    ];
  }, [stats]);

  const systemRows: SystemStatusRow[] = useMemo(() => {
    if (!stats) return [];
    return [
      {
        key: "db",
        label: "Database",
        value: "Operational",
        status: systemDot("db", stats.system),
      },
      {
        key: "api",
        label: "API Latency",
        value: `${stats.system.apiLatencyMs} ms`,
        status: systemDot("api", stats.system),
      },
      {
        key: "smtp",
        label: "SMTP Mailer",
        value: stats.system.smtpConnected ? "Connected" : "Not set",
        status: systemDot("smtp", stats.system),
      },
      {
        key: "cron",
        label: "Google Reviews Cron",
        value: stats.system.googleCronConfigured ? "Configured" : "Needs setup",
        status: systemDot("cron", stats.system),
      },
      {
        key: "groq",
        label: "Groq AI",
        value: stats.system.groqConnected ? "Ready" : "Missing key",
        status: systemDot("groq", stats.system),
      },
    ];
  }, [stats]);

  const recentLeads = useMemo(() => {
    return activity
      .filter((item) => item.type === "inquiry" || item.type === "chat_lead")
      .slice(0, 3);
  }, [activity]);

  const quickLinks = [
    { label: "Inbox", href: "/admin/inquiries", icon: <FiMail />, badge: stats ? stats.inquiries.newCount + stats.chatLeads.pending : 0 },
    { label: "AI Chat Logs", href: "/admin/chat", icon: <FiMessageSquare /> },
    { label: "Google Reviews", href: "/admin/google-reviews", icon: <FiAward /> },
    { label: "Services", href: "/admin/services", icon: <FiGrid /> },
    { label: "Portfolio", href: "/admin/portfolio", icon: <FiExternalLink /> },
    { label: "Blog Posts", href: "/admin/blog", icon: <FiBookOpen /> },
    { label: "Settings", href: "/admin/settings", icon: <FiSettings /> },
    { label: "Users", href: "/admin/users", icon: <FiUsers /> },
    { label: "Email Templates", href: "/admin/templates", icon: <FiSend /> },
  ];

  const lastUpdatedLabel = lastUpdated
    ? lastUpdated.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "--:--:--";

  if (loadState === "loading") {
    return <SkeletonDashboard />;
  }

  return (
    <div className="space-y-8 bg-white text-gray-900 rounded-3xl">
      <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
            Admin Command
          </p>
          <h1 className="text-3xl font-black text-gray-900">
            Live Operations Dashboard
          </h1>
          <p className="text-sm text-gray-500">
            Real-time pulse across leads, content, reviews, and system health.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-600">
            <FiClock /> Last updated: {lastUpdatedLabel}
          </div>
          <button
            onClick={() => fetchData(false)}
            className="flex items-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1.5 text-xs font-semibold shadow-[0_12px_30px_rgba(220,38,38,0.35)] hover:opacity-90 transition"
          >
            <FiRefreshCw className={loadState === "refreshing" ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      </header>

      {error && (
        <div className="flex items-center gap-3 rounded-2xl border border-amber-200/80 bg-amber-50 text-amber-800 px-4 py-3 dark:border-amber-400/30 dark:bg-amber-900/40 dark:text-amber-100">
          <FiAlertCircle />
          <span className="text-sm">{error}</span>
        </div>
      )}

      {/* Section A - Key Metric Cards */}
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {keyCards.map((card) => (
          <div key={card.label} className={`${cardShell} p-5`}>
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                  {card.label}
                </p>
                <div className="flex items-end gap-2 mt-2">
                  <span className="text-3xl font-black text-gray-900">
                    {card.value}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-500">
                    <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
                    {card.subLabel}
                  </span>
                </div>
              </div>
              <div className="rounded-full bg-gray-100 border border-gray-200 p-3 text-gray-500">
                <FiBarChart2 />
              </div>
            </div>
            <Sparkline values={card.sparkline || [0, 0, 0, 0, 0]} />
          </div>
        ))}
      </section>

      {/* Section B - Secondary metric cards */}
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {secondaryCards.map((card) => (
          <div key={card.label} className={`${cardShell} p-4`}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-gray-600">
                  {card.label}
                </p>
                <p className="text-2xl font-bold text-gray-900">
                  {card.value}
                </p>
              </div>
              <FiActivity className="text-gray-500" />
            </div>
            <p className="text-xs text-gray-500 mt-2">{card.subLabel}</p>
          </div>
        ))}
      </section>

      {/* Section C - Activity + Leads & System */}
      <section className="grid gap-4 lg:grid-cols-2">
        <div className={`${cardShell} p-5`}>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <FiActivity className="text-red-500" />
              <h3 className="text-lg font-semibold text-gray-900">
                Live Activity Feed
              </h3>
            </div>
            <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs text-gray-600">
              {activity.length} events
            </span>
          </div>
          <div className="divide-y divide-gray-100 dark:divide-white/5">
            {activity.length === 0 ? (
              <p className="text-sm text-gray-500 py-4">Quiet right now. Fresh pings will appear here.</p>
            ) : (
              activity.map((item) => (
                <div key={`${item.type}-${item.id}`} className="py-3 flex items-start gap-3">
                  <div className="mt-1">
                    {item.type === "inquiry" && <FiMail className="text-red-500" />}
                    {item.type === "chat_lead" && <FiMessageSquare className="text-amber-500" />}
                    {item.type === "review_reply" && <FiAward className="text-emerald-500" />}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-900">
                      {item.type === "inquiry" && `${item.name || "Prospect"} sent an inquiry${item.subject ? ` - ${item.subject}` : ""}`}
                      {item.type === "chat_lead" && `${item.name || "Chat lead"} - Intent ${item.intentScore ?? "-"} (${item.intentCategory || "Unclassified"})`}
                      {item.type === "review_reply" && `${item.reviewer || "Reviewer"} - Rating ${item.rating || "-"}`}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 ${statusBadgeColor(item.status)}`}>
                        <FiFlag className="text-[10px]" /> {item.status || "pending"}
                      </span>
                      <span>
                        {new Date(item.createdAt).toLocaleDateString()} at {new Date(item.createdAt).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className={`${cardShell} p-5`}>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <FiUsers className="text-amber-500" />
                <h3 className="text-lg font-semibold text-gray-900">Recent Leads</h3>
              </div>
              <FiArrowRight className="text-gray-500" />
            </div>
            {recentLeads.length === 0 ? (
              <p className="text-sm text-gray-500">No leads yet. Your next win will show up here.</p>
            ) : (
              <div className="space-y-3">
                {recentLeads.map((lead) => (
                  <div key={lead.id} className="flex items-center justify-between rounded-2xl border border-gray-100 dark:border-white/5 px-3 py-2.5">
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        {lead.name || "Unnamed lead"}
                      </p>
                      <p className="text-xs text-gray-500">
                        {lead.type === "inquiry" ? "Inquiry" : "AI Chat"} - {lead.subject || lead.intentCategory || "No subject"}
                      </p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${statusBadgeColor(lead.status)}`}>
                      {lead.status || "new"}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={`${cardShell} p-5`}>
            <div className="flex items-center gap-2 mb-3">
              <FiCpu className="text-emerald-500" />
              <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
            </div>
            <div className="space-y-3">
              {systemRows.map((row) => (
                <div key={row.key} className="flex items-center justify-between rounded-2xl bg-gray-50 dark:bg-gray-800/60 px-3 py-2.5">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${dotColor(row.status)}`} />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
                      {row.label}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section D - Quick Navigation */}
      <section className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
          <button
            key={link.label}
            onClick={() => router.push(link.href)}
            className={`${cardShell} flex items-center justify-between px-4 py-3 text-left hover:-translate-y-0.5 transition-transform`}
          >
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-gray-100 border border-gray-200 p-2 text-gray-600">
                {link.icon}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {link.label}
                </p>
                <p className="text-xs text-gray-500">Jump in faster</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {typeof link.badge === "number" && link.badge > 0 && (
                <span className="rounded-full bg-red-100 text-red-700 px-2 py-0.5 text-xs">
                  {link.badge}
                </span>
              )}
              <FiArrowRight className="text-gray-500" />
            </div>
          </button>
        ))}
      </section>
    </div>
  );
}
