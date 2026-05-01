"use client";
import React, { useState, useEffect } from "react";
import { 
  MessageCircle, 
  Send, 
  ThumbsUp, 
  Reply, 
  User,
  Loader2,
  CheckCircle2,
  Edit2,
  Trash2,
  X,
  Check
} from "lucide-react";
import { formatDate, getInitials, stringToColor } from "@/lib/blog/utils";

interface Comment {
  id: string;
  authorName: string;
  authorEmail: string | null;
  userId: string | null;
  content: string;
  likesCount: number;
  createdAt: string;
  replies?: Comment[];
  parentId?: string | null;
}

interface CommentSectionProps {
  slug: string;
}

// Simple unique ID for current session/user to allow edit/delete
const getStoredUserId = () => {
  if (typeof window === "undefined") return "";
  let id = localStorage.getItem("growthik_user_id");
  if (!id) {
    id = "user_" + Math.random().toString(36).substring(2, 11);
    localStorage.setItem("growthik_user_id", id);
  }
  return id;
};

export default function CommentSection({ slug }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [currentUserId, setCurrentUserId] = useState("");
  
  // Edit state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");
  
  // Form state
  const [formData, setFormData] = useState({
    authorName: "",
    authorEmail: "",
    content: "",
    parentId: null as string | null
  });

  const [replyTo, setReplyTo] = useState<string | null>(null);

  useEffect(() => {
    setCurrentUserId(getStoredUserId());
    const init = async () => {
      try {
        await fetch(`/api/blog/${slug}/view`, { method: "POST" });
        const res = await fetch(`/api/blog/${slug}/comments`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setComments(data);
        }
      } catch (err) {
        console.error("Init error:", err);
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [slug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.authorName || !formData.content) return;

    setSubmitting(true);
    try {
      const res = await fetch(`/api/blog/${slug}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, userId: currentUserId })
      });
      
      if (res.ok) {
        setSuccess(true);
        const freshRes = await fetch(`/api/blog/${slug}/comments`);
        const freshData = await freshRes.json();
        setComments(freshData);
        setFormData({ authorName: "", authorEmail: "", content: "", parentId: null });
        setReplyTo(null);
        setTimeout(() => setSuccess(false), 3000);
      }
    } catch (err) {
      console.error("Submit error:", err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = async (commentId: string) => {
    if (!editContent.trim()) return;
    try {
      const res = await fetch(`/api/blog/comment/${commentId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: editContent, userId: currentUserId })
      });
      if (res.ok) {
        setEditingId(null);
        // Refresh local state
        const refresh = async () => {
          const res = await fetch(`/api/blog/${slug}/comments`);
          const data = await res.json();
          setComments(data);
        };
        refresh();
      }
    } catch (err) {
      console.error("Edit error:", err);
    }
  };

  const handleDelete = async (commentId: string) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;
    try {
      const res = await fetch(`/api/blog/comment/${commentId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: currentUserId })
      });
      if (res.ok) {
        setComments(prev => {
          const filterItem = (items: Comment[]): Comment[] => {
            return items.filter(item => item.id !== commentId).map(item => ({
              ...item,
              replies: item.replies ? filterItem(item.replies) : []
            }));
          };
          return filterItem(prev);
        });
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  const handleLike = async (commentId: string) => {
    try {
      const res = await fetch(`/api/blog/comment/${commentId}/like`, { method: "POST" });
      if (res.ok) {
        const data = await res.json();
        setComments(prev => {
          const updateItem = (items: Comment[]): Comment[] => {
            return items.map(item => {
              if (item.id === commentId) return { ...item, likesCount: data.likesCount };
              if (item.replies) return { ...item, replies: updateItem(item.replies) };
              return item;
            });
          };
          return updateItem(prev);
        });
      }
    } catch (err) {
      console.error("Like error:", err);
    }
  };

  const CommentItem = ({ comment, isReply = false }: { comment: Comment, isReply?: boolean }) => {
    const isAuthor = comment.userId === currentUserId;
    const isEditing = editingId === comment.id;
    const avatarColor = stringToColor(comment.authorName);

    return (
      <div className={`flex gap-4 ${isReply ? "mt-6 ml-6 md:ml-12 border-l-2 border-(--border)/30 pl-6" : "mt-10"}`}>
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-sm text-white font-black text-xs"
          style={{ backgroundColor: avatarColor }}
        >
          {getInitials(comment.authorName)}
        </div>
        <div className="flex-1 bg-(--surface) p-5 rounded-2xl border border-(--border)/50 hover:border-(--color-primary)/30 transition-all shadow-sm">
          <div className="flex items-center justify-between mb-1">
            <h4 className="text-sm font-black text-(--text-primary)">{comment.authorName}</h4>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-bold text-(--text-tertiary) uppercase tracking-widest">
                {formatDate(comment.createdAt)}
              </span>
              {isAuthor && !isEditing && (
                <div className="flex items-center gap-2">
                  <button onClick={() => { setEditingId(comment.id); setEditContent(comment.content); }} className="text-(--text-tertiary) hover:text-(--color-primary)">
                    <Edit2 className="w-3 h-3" />
                  </button>
                  <button onClick={() => handleDelete(comment.id)} className="text-(--text-tertiary) hover:text-red-500">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {isEditing ? (
            <div className="mt-2">
              <textarea 
                value={editContent}
                onChange={e => setEditContent(e.target.value)}
                className="w-full p-3 text-sm border rounded-xl bg-(--background) focus:outline-none focus:border-(--color-primary)"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button onClick={() => setEditingId(null)} className="p-1.5 rounded-lg bg-gray-100 text-gray-600">
                  <X className="w-4 h-4" />
                </button>
                <button onClick={() => handleEdit(comment.id)} className="p-1.5 rounded-lg bg-(--color-primary) text-white">
                  <Check className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            <p className="text-sm text-(--text-secondary) leading-relaxed mb-3">
              {comment.content}
            </p>
          )}

          <div className="flex items-center gap-4">
            <button 
              onClick={() => handleLike(comment.id)}
              className="flex items-center gap-1 text-[11px] font-bold text-(--text-tertiary) hover:text-(--color-primary) transition-colors"
            >
              <ThumbsUp className="w-3.5 h-3.5" />
              {comment.likesCount}
            </button>
            {!isReply && (
              <button 
                onClick={() => {
                  setReplyTo(comment.authorName);
                  setFormData(prev => ({ ...prev, parentId: comment.id }));
                  document.getElementById("comment-form")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-1 text-[11px] font-bold text-(--text-tertiary) hover:text-(--color-primary) transition-colors"
              >
                <Reply className="w-3.5 h-3.5" />
                Reply
              </button>
            )}
          </div>
          {comment.replies && comment.replies.map(reply => (
            <CommentItem key={reply.id} comment={reply} isReply />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mt-16 pt-12 border-t border-(--border)">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-(--color-primary)/10 rounded-2xl flex items-center justify-center">
          <MessageCircle className="w-6 h-6 text-(--color-primary)" />
        </div>
        <div>
          <h3 className="text-xl font-black text-(--text-primary)">
            Community Insights ({comments.length + comments.reduce((acc, c) => acc + (c.replies?.length || 0), 0)})
          </h3>
          <p className="text-sm text-(--text-secondary) font-medium">Join the discussion and share your thoughts</p>
        </div>
      </div>

      <div id="comment-form" className="bg-(--surface) border border-(--border) rounded-3xl p-6 lg:p-8 mb-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-(--color-primary)/5 rounded-full blur-3xl pointer-events-none" />
        
        {success ? (
          <div className="flex flex-col items-center justify-center py-8 text-center animate-fadeIn">
            <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            <h4 className="text-lg font-black text-(--text-primary) mb-2">Comment Received!</h4>
            <p className="text-sm text-(--text-secondary) font-medium">Your thought has been added to the discussion.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {replyTo && (
              <div className="flex items-center justify-between px-4 py-2 bg-(--color-primary)/5 rounded-xl border border-(--color-primary)/10 mb-4">
                <span className="text-xs font-bold text-(--color-primary)">
                  Replying to {replyTo}
                </span>
                <button 
                  type="button"
                  onClick={() => { setReplyTo(null); setFormData(p => ({ ...p, parentId: null })); }}
                  className="text-[10px] font-black uppercase text-(--text-tertiary) hover:text-red-500"
                >
                  Cancel
                </button>
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name *"
                required
                value={formData.authorName}
                onChange={e => setFormData(p => ({ ...p, authorName: e.target.value }))}
                className="w-full h-12 px-5 rounded-2xl border border-(--border) bg-(--background) text-sm font-bold text-(--text-primary) placeholder:text-(--text-tertiary) focus:outline-none focus:border-(--color-primary) transition-all"
              />
              <input
                type="email"
                placeholder="Email Address (optional)"
                value={formData.authorEmail}
                onChange={e => setFormData(p => ({ ...p, authorEmail: e.target.value }))}
                className="w-full h-12 px-5 rounded-2xl border border-(--border) bg-(--background) text-sm font-bold text-(--text-primary) placeholder:text-(--text-tertiary) focus:outline-none focus:border-(--color-primary) transition-all"
              />
            </div>
            <textarea
              placeholder="Write your comment here..."
              required
              rows={4}
              value={formData.content}
              onChange={e => setFormData(p => ({ ...p, content: e.target.value }))}
              className="w-full p-5 rounded-2xl border border-(--border) bg-(--background) text-sm font-medium text-(--text-primary) placeholder:text-(--text-tertiary) focus:outline-none focus:border-(--color-primary) transition-all resize-none"
            />
            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-(--color-primary) text-white font-black rounded-xl text-sm hover:opacity-90 transition-all shadow-lg shadow-(--color-primary)/20 disabled:opacity-50"
              >
                {submitting ? (
                  <>Posting... <Loader2 className="w-4 h-4 animate-spin" /></>
                ) : (
                  <>Post Comment <Send className="w-4 h-4" /></>
                )}
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="space-y-2">
        {loading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 text-(--color-primary) animate-spin" />
          </div>
        ) : comments.length === 0 ? (
          <div className="text-center py-12 px-6 border-2 border-dashed border-(--border) rounded-3xl">
            <p className="text-sm text-(--text-secondary) font-bold">No comments yet. Be the first to start the conversation!</p>
          </div>
        ) : (
          comments.map(comment => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
}
