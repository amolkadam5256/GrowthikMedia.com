export type DotStatus = "green" | "amber" | "red";

export interface InquiryStats {
  total: number;
  newCount: number;
  repliedCount: number;
  thisWeek: number;
}

export interface ChatLeadStats {
  total: number;
  highIntent: number;
  pending: number;
}

export interface PortfolioStats {
  total: number;
  featured: number;
}

export interface BlogStats {
  total: number;
  published: number;
  drafts: number;
}

export interface GoogleReviewStats {
  totalReplied: number;
  pendingErrors: number;
}

export interface AdminStats {
  total: number;
  active: number;
  superAdmins: number;
}

export interface SystemStats {
  dbStatus: "operational";
  apiLatencyMs: number;
  smtpConnected: boolean;
  groqConnected: boolean;
  googleCronConfigured: boolean;
}

export interface DashboardStats {
  inquiries: InquiryStats;
  chatLeads: ChatLeadStats;
  portfolioProjects: PortfolioStats;
  blogPosts: BlogStats;
  googleReviews: GoogleReviewStats;
  admins: AdminStats;
  system: SystemStats;
}

export type ActivityType = "inquiry" | "chat_lead" | "review_reply";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  name?: string | null;
  subject?: string | null;
  intentScore?: number | null;
  intentCategory?: string | null;
  reviewer?: string | null;
  rating?: string | null;
  status?: string | null;
  createdAt: string | Date;
}

export interface MetricCard {
  label: string;
  value: number | string;
  subLabel?: string;
  trend?: "up" | "down" | "neutral";
  sparkline?: number[];
}

export interface SystemStatusRow {
  key: "db" | "api" | "smtp" | "cron" | "groq";
  label: string;
  value?: string;
  status: DotStatus;
}
