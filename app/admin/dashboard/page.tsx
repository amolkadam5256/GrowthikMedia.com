"use client";
import React from "react";
import Link from "next/link";
import { FiUsers, FiUserPlus, FiActivity, FiLogOut } from "react-icons/fi";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Dashboard
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Welcome, Administrator
          </p>
        </div>
        <Link
          href="/admin/login"
          className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 text-red-600 rounded-lg shadow hover:bg-red-50 transition"
        >
          <FiLogOut />
          <span>Logout</span>
        </Link>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-xl">
              <FiUsers className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h3 className="text-2xl font-bold dark:text-white">124</h3>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-xl">
              <FiActivity className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Sessions</p>
              <h3 className="text-2xl font-bold dark:text-white">12</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-10">
        <h2 className="text-xl font-bold mb-4 dark:text-white">
          User Management
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link
            href="/admin/users/create"
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-dashed border-gray-300 dark:border-gray-600 hover:border-red-500 hover:text-red-500 transition-colors flex flex-col items-center justify-center gap-2 text-gray-500 dark:text-gray-400 group"
          >
            <FiUserPlus className="w-8 h-8 group-hover:scale-110 transition-transform" />
            <span className="font-medium">Create New User</span>
          </Link>
          <Link
            href="/admin/users/list"
            className="p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow flex flex-col justify-center gap-2"
          >
            <span className="font-bold text-lg dark:text-white">
              View User List
            </span>
            <span className="text-sm text-gray-500">
              Manage existing accounts
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
