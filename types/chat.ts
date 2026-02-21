export interface ChatMessage {
  id: string;
  text: string;
  sender: string;
  createdAt: string | Date;
}

export interface ChatSession {
  id: string;
  createdAt: string | Date;
  messages: ChatMessage[];
}

export interface ChatLead {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  tags?: string;
  createdAt: string | Date;
  sessions: ChatSession[];
  score?: number;
}

export const STATUS_CONFIG: Record<
  string,
  { color: string; bg: string; border: string; dot: string; label: string }
> = {
  NEW: {
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-50 dark:bg-blue-950/30",
    border: "border-blue-200 dark:border-blue-800",
    dot: "bg-blue-500",
    label: "New",
  },
  INTERESTED: {
    color: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-50 dark:bg-amber-950/30",
    border: "border-amber-200 dark:border-amber-800",
    dot: "bg-amber-500",
    label: "Interested",
  },
  HOT: {
    color: "text-red-600 dark:text-red-400",
    bg: "bg-red-50 dark:bg-red-950/30",
    border: "border-red-200 dark:border-red-800",
    dot: "bg-red-500",
    label: "Hot",
  },
  CLIENT: {
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-50 dark:bg-purple-950/30",
    border: "border-purple-200 dark:border-purple-800",
    dot: "bg-purple-500",
    label: "Client",
  },
};
