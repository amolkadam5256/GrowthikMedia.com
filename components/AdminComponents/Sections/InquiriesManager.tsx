import React, { useState } from "react";
import { FiSearch, FiMail, FiCheckCircle, FiClock } from "react-icons/fi";

const mockInquiries = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Website Query",
    date: "2 Hours ago",
    status: "New",
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@tech.com",
    subject: "Partnership Proposal",
    date: "1 Day ago",
    status: "Read",
  },
];

export default function InquiriesManager() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Inquiries
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Manage incoming messages from "Contact Us"
          </p>
        </div>
      </div>

      <div className="grid gap-4">
        {mockInquiries.map((item) => (
          <div
            key={item.id}
            className="bg-gray-50 dark:bg-gray-700/30 p-4 rounded-xl flex items-center justify-between border border-gray-100 dark:border-gray-700 cursor-pointer hover:border-blue-500 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl
                  ${
                    item.status === "New"
                      ? "bg-blue-100 text-blue-600"
                      : "bg-gray-200 text-gray-500"
                  }`}
              >
                <FiMail />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-gray-100">
                  {item.subject}
                </h4>
                <p className="text-sm text-gray-500">
                  {item.name} • {item.email}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-xs text-gray-400 flex items-center gap-1 justify-end">
                  <FiClock className="w-3 h-3" /> {item.date}
                </div>
                <div
                  className={`text-xs font-bold mt-1 px-2 py-0.5 rounded-full inline-block
                      ${
                        item.status === "New"
                          ? "bg-blue-500 text-white"
                          : "bg-gray-600 text-gray-300"
                      }
                   `}
                >
                  {item.status}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
