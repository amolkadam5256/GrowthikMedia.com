import React, { useState, useEffect } from "react";
import {
  FiPlus,
  FiTrash2,
  FiEdit2,
  FiSearch,
  FiShield,
  FiUser,
  FiMoreVertical,
  FiCheck,
  FiX,
  FiAlertCircle,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface AdminUser {
  id: string;
  name: string | null;
  email: string;
  role: string;
  isActive: boolean;
  createdAt: string;
}

export default function UserManager() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [sessionLoading, setSessionLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState<{
    role: string;
    email: string;
  } | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit">("add");
  const [selectedUser, setSelectedUser] = useState<AdminUser | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "ADMIN",
    isActive: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const isSuperAdmin = currentUser?.role === "SUPER_ADMIN";

  // Fetch current user session
  const fetchSession = async () => {
    try {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      if (res.ok && data.success) {
        setCurrentUser(data.user);
      }
    } catch (err) {
      console.error("Session fetch failed", err);
    } finally {
      setSessionLoading(false);
    }
  };

  // Fetch users list
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/admin/users");
      const data = await res.json();
      if (res.ok) {
        setUsers(data);
      } else {
        setError(data.error || "Failed to fetch users");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSession();
    fetchUsers();
  }, []);

  const maskEmail = (email: string) => {
    if (isSuperAdmin) return email;
    const [user, domain] = email.split("@");
    if (!user || !domain) return "****@****.com";
    return `${user.substring(0, 3)}***@***${domain.substring(domain.lastIndexOf("."))}`;
  };

  const handleOpenAdd = () => {
    if (!isSuperAdmin) {
      alert("Only Super Admins can add new users.");
      return;
    }
    setModalType("add");
    setSelectedUser(null);
    setFormData({
      name: "",
      email: "",
      password: "",
      role: "ADMIN",
      isActive: true,
    });
    setError(null);
    setShowModal(true);
  };

  const handleOpenEdit = (user: AdminUser) => {
    if (!isSuperAdmin) {
      alert("Only Super Admins can edit users.");
      return;
    }
    setModalType("edit");
    setSelectedUser(user);
    setFormData({
      name: user.name || "",
      email: user.email,
      password: "", // Keep empty unless changing
      role: user.role,
      isActive: user.isActive,
    });
    setError(null);
    setShowModal(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isSuperAdmin) return;
    setSubmitting(true);
    setError(null);

    const url =
      modalType === "add"
        ? "/api/admin/users"
        : `/api/admin/users/${selectedUser?.id}`;
    const method = modalType === "add" ? "POST" : "PATCH";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setShowModal(false);
        fetchUsers();
      } else {
        setError(data.error || "Failed to save user");
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, role: string) => {
    if (!isSuperAdmin) {
      alert("Only Super Admins can delete users.");
      return;
    }
    if (role === "SUPER_ADMIN") {
      alert(
        "Main Admin (SUPER_ADMIN) is protected and cannot be deleted from the dashboard for security reasons.",
      );
      return;
    }

    const isConfirmed = window.confirm(
      "⚠️ SECURITY ACTION: Are you sure you want to PERMANENTLY remove this administrator? All access will be revoked immediately.",
    );

    if (!isConfirmed) return;

    try {
      const res = await fetch(`/api/admin/users/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchUsers();
      } else {
        const data = await res.json();
        alert(data.error || "Failed to delete user");
      }
    } catch (err) {
      alert("An error occurred while deleting the user");
    }
  };

  const filteredUsers = users.filter((user) => {
    const searchLow = searchQuery.toLowerCase();
    return (
      (user.name || "").toLowerCase().includes(searchLow) ||
      (isSuperAdmin && user.email.toLowerCase().includes(searchLow))
    );
  });

  if (sessionLoading) {
    return (
      <div className="p-8 text-center text-gray-500">
        Authenticating Management Module...
      </div>
    );
  }

  return (
    <div className="p-2 md:p-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h2 className="text-3xl font-extrabold bg-linear-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
            User Management
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1 flex items-center gap-2">
            <FiShield className="text-red-500" />
            {isSuperAdmin
              ? "Complete System Access"
              : "General Administrator View"}
          </p>
        </motion.div>

        {isSuperAdmin && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenAdd}
            className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-red-600 to-red-700 text-white rounded-xl shadow-lg shadow-red-500/20 hover:shadow-red-500/40 transition-all duration-300 font-semibold"
          >
            <FiPlus className="text-xl" /> Add New Admin
          </motion.button>
        )}
      </div>

      {/* Stats & Search */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm">
          <p className="text-gray-500 text-xs font-medium uppercase tracking-wider mb-1">
            Total Users
          </p>
          <p className="text-2xl font-bold dark:text-white uppercase">
            {users.length} Registered
          </p>
        </div>
        <div className="md:col-span-2 relative">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={
              isSuperAdmin
                ? "Search by name or email..."
                : "Search by user name..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
          />
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white dark:bg-black backdrop-blur-2xl rounded-3xl border border-gray-100 dark:border-white/10 overflow-hidden shadow-xl shadow-gray-200/20 dark:shadow-none">
        <div className="overflow-x-auto min-w-full">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50 dark:bg-white/5 border-b border-gray-100 dark:border-white/10">
                <th className="py-5 px-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  User Identity
                </th>
                <th className="py-5 px-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Access Level
                </th>
                <th className="py-5 px-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                  Status
                </th>
                {isSuperAdmin && (
                  <th className="py-5 px-6 text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest text-right">
                    Privileged Actions
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-700/50">
              <AnimatePresence mode="popLayout">
                {loading ? (
                  Array(3)
                    .fill(0)
                    .map((_, i) => (
                      <tr key={i} className="animate-pulse">
                        <td
                          colSpan={isSuperAdmin ? 4 : 3}
                          className="p-8 text-center text-gray-400"
                        >
                          Syncing encrypted data...
                        </td>
                      </tr>
                    ))
                ) : filteredUsers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={isSuperAdmin ? 4 : 3}
                      className="p-20 text-center"
                    >
                      <div className="flex flex-col items-center gap-2 opacity-40">
                        <FiUser className="text-5xl" />
                        <p className="font-medium text-lg">
                          No users found in current view
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredUsers.map((user) => (
                    <motion.tr
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      key={user.id}
                      className="group hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors duration-300"
                    >
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-inner ${
                              user.role === "SUPER_ADMIN"
                                ? "bg-linear-to-br from-red-500 to-rose-600"
                                : "bg-linear-to-br from-slate-600 to-slate-800"
                            }`}
                          >
                            {user.name?.charAt(0) || "A"}
                          </div>
                          <div>
                            <div className="font-bold text-gray-900 dark:text-gray-100 flex items-center gap-2">
                              {user.name || "Anonymous User"}
                              {user.role === "SUPER_ADMIN" && (
                                <span className="bg-red-500/10 text-red-500 text-[10px] px-2 py-0.5 rounded-full font-black uppercase">
                                  Main
                                </span>
                              )}
                            </div>
                            <div
                              className={`text-sm ${isSuperAdmin ? "text-gray-400 dark:text-gray-500" : "text-gray-400/30 italic blur-[2px] transition-all hover:blur-none cursor-help"}`}
                              title={
                                !isSuperAdmin ? "Email hidden for privacy" : ""
                              }
                            >
                              {maskEmail(user.email)}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-5 px-6">
                        <span
                          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold ${
                            user.role === "SUPER_ADMIN"
                              ? "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
                              : user.role === "ADMIN"
                                ? "bg-slate-100 text-slate-600 dark:bg-slate-800/50 dark:text-slate-400"
                                : "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                          }`}
                        >
                          <FiShield className="text-[10px]" />
                          {user.role === "SUPER_ADMIN"
                            ? "SUPER_ADMIN"
                            : "ADMINISTRATOR"}
                        </span>
                      </td>
                      <td className="py-5 px-6">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${user.isActive ? "bg-green-500 animate-pulse" : "bg-gray-400"}`}
                          />
                          <span
                            className={`text-sm font-medium ${user.isActive ? "text-green-600" : "text-gray-500"}`}
                          >
                            {user.isActive ? "Active" : "Disabled"}
                          </span>
                        </div>
                      </td>
                      {isSuperAdmin && (
                        <td className="py-5 px-6 text-right">
                          <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                              onClick={() => handleOpenEdit(user)}
                              className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-blue-500 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                            >
                              <FiEdit2 size={16} />
                            </button>
                            {user.role !== "SUPER_ADMIN" && (
                              <button
                                onClick={() => handleDelete(user.id, user.role)}
                                className="p-2.5 rounded-xl bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all"
                              >
                                <FiTrash2 size={16} />
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>

      {/* Modern Modal Overlay */}
      <AnimatePresence>
        {showModal && isSuperAdmin && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !submitting && setShowModal(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-white dark:bg-black w-full max-w-xl rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10"
            >
              {/* Modal Banner */}
              <div
                className={`h-32 bg-linear-to-r ${modalType === "add" ? "from-red-600 to-rose-700" : "from-blue-600 to-indigo-700"} p-8 relative`}
              >
                <div className="relative z-10">
                  <h3 className="text-2xl font-black text-white">
                    {modalType === "add"
                      ? "Create Administrator"
                      : "Update Profile"}
                  </h3>
                  <p className="text-white/70 text-sm font-medium">
                    System-level authentication initialization.
                  </p>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
              </div>

              <form onSubmit={handleSubmit} className="p-8 pt-12 space-y-6">
                {error && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/30 rounded-2xl flex items-center gap-3 text-red-600 text-sm font-medium"
                  >
                    <FiAlertCircle size={20} /> {error}
                  </motion.div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
                      Full Name
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        required
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full pl-12 pr-4 py-3.5 bg-gray-50 dark:bg-white/5 border-0 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
                      Email Address
                    </label>
                    <div className="relative">
                      <FiCheck className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500" />
                      <input
                        required
                        type="email"
                        placeholder="admin@growthik.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800/80 border-0 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
                      {modalType === "add"
                        ? "Set Password"
                        : "Reset Password (Optional)"}
                    </label>
                    <input
                      required={modalType === "add"}
                      type="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800/80 border-0 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">
                      Access Role
                    </label>
                    <select
                      value={formData.role}
                      onChange={(e) =>
                        setFormData({ ...formData, role: e.target.value })
                      }
                      className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-800/80 border-0 rounded-2xl focus:ring-2 focus:ring-red-500 outline-none transition-all dark:text-white appearance-none cursor-pointer"
                    >
                      <option value="SUPER_ADMIN">Main Admin (Super)</option>
                      <option value="ADMIN">Administrator</option>
                      <option value="EDITOR">Editor</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800/50 rounded-2xl">
                  <div className="flex flex-col">
                    <span className="text-sm font-bold dark:text-white">
                      Active Status
                    </span>
                    <span className="text-xs text-gray-400">
                      Enable or disable account access
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, isActive: !formData.isActive })
                    }
                    className={`w-14 h-8 rounded-full transition-all duration-300 relative ${formData.isActive ? "bg-green-500" : "bg-gray-300 hover:bg-gray-400"}`}
                  >
                    <div
                      className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-all duration-300 ${formData.isActive ? "left-7" : "left-1"}`}
                    />
                  </button>
                </div>

                <div className="flex gap-4 mt-8 pt-4">
                  <button
                    type="button"
                    disabled={submitting}
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-6 py-4 rounded-2xl font-bold text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    Discard
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className={`flex-[2] px-6 py-4 rounded-2xl font-bold text-white shadow-xl flex items-center justify-center gap-2 group transition-all ${
                      modalType === "add"
                        ? "bg-red-600 shadow-red-500/20 hover:bg-red-700"
                        : "bg-blue-600 shadow-blue-500/20 hover:bg-blue-700"
                    }`}
                  >
                    {submitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        {modalType === "add"
                          ? "Initialize Account"
                          : "Sync Transitions"}
                        <FiCheck className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
