"use client";
import React from "react";
import { FiSettings, FiGlobe, FiLock } from "react-icons/fi";

export default function SettingsManager() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
          <FiSettings className="text-gray-500" />
          Settings
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-1">
          Configure general application settings.
        </p>
      </div>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-white/10">
          <h3 className="font-bold text-lg mb-4 dark:text-white flex items-center gap-2">
            <FiGlobe /> General
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-xl">
              <div>
                <p className="font-medium dark:text-white">Site Name</p>
                <p className="text-xs text-gray-500">Growthik Media</p>
              </div>
              <button className="text-blue-600 text-sm font-medium">
                Edit
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-white/5 rounded-xl">
              <div>
                <p className="font-medium dark:text-white">Time Zone</p>
                <p className="text-xs text-gray-500">Asia/Kolkata (GMT+5:30)</p>
              </div>
              <button className="text-blue-600 text-sm font-medium">
                Edit
              </button>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="bg-white dark:bg-black rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-white/10">
          <h3 className="font-bold text-lg mb-4 dark:text-white flex items-center gap-2">
            <FiLock /> Security
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700 dark:text-gray-300">
                Two-Factor Authentication
              </span>
              <div className="relative inline-block w-12 h-6 transition duration-200 ease-in-out bg-gray-200 rounded-full cursor-pointer">
                <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform duration-200"></span>
              </div>
            </div>
            <button className="text-red-500 text-sm font-medium hover:underline">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
