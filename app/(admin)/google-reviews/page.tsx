"use client";

import React, { useState, useEffect } from "react";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Loader2, 
  CheckCircle2, 
  AlertCircle,
  Star,
  MessageSquare,
  RefreshCcw,
  ExternalLink,
  ShieldCheck
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GoogleReviewsDashboard() {
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ 
    total: 0, 
    replied: 0, 
    pending: 0, 
    lastSync: "Never" 
  });
  const [integration, setIntegration] = useState(null);

  const handleConnectLink = () => {
    window.location.href = "/api/google/auth";
  };

  const syncReviews = async () => {
    setLoading(true);
    try {
      const resp = await fetch("/api/google/reply"); // Manual trigger
      const data = await resp.json();
      // Fetch latest stats after sync
      fetchStats();
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    // In a real app, you'd fetch this from a protected API endpoint
    // For now, these are placeholder values or actual fetched ones if we implement GetStats API
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white p-6 md:p-12 font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <header className="mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              Growthik AI Responder
            </h1>
            <p className="text-gray-400 text-lg">
              Manage and automate your Google Business reviews with intelligent AI replies.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button 
               variant="outline" 
               className="border-gray-800 bg-black/40 hover:bg-gray-900 text-white rounded-xl py-6 px-6"
               onClick={syncReviews}
               disabled={loading}
            >
              {loading ? <Loader2 className="animate-spin mr-2" /> : <RefreshCcw className="mr-2 h-4 w-4" />}
              Sync Now
            </Button>
            <Button 
               className="bg-primary hover:bg-primary-hover text-black font-semibold rounded-xl py-6 px-8 shadow-lg shadow-primary/20"
               onClick={handleConnectLink}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Connect Google
            </Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Stats Cards with Glassmorphism */}
          {[
            { label: "Total Reviews", val: "0", icon: <Star className="text-yellow-400" />, color: "border-yellow-500/20" },
            { label: "Replied", val: "0", icon: <CheckCircle2 className="text-green-400" />, color: "border-green-500/20" },
            { label: "Pending", val: "0", icon: <AlertCircle className="text-red-400" />, color: "border-red-500/20" }
          ].map((stat, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className={`bg-black/40 backdrop-blur-xl border ${stat.color} rounded-2xl h-full shadow-2xl overflow-hidden group`}>
                <CardHeader className="p-6 pb-2 flex flex-row items-center justify-between">
                  <span className="text-gray-400 text-sm font-medium">{stat.label}</span>
                  <div className="p-2 rounded-lg bg-white/5">{stat.icon}</div>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <div className="text-4xl font-bold mb-1">{stat.val}</div>
                  <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    Updated just now
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <CardHeader className="border-b border-gray-800 p-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
                  <ShieldCheck className="text-white h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">Authentication Status</CardTitle>
                  <CardDescription className="text-gray-500">Google Business Profile OAuth</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <p className="text-gray-400 mb-6 leading-relaxed">
                Connect your official Google Business Profile to allow our AI to respond to customer inquiries.
              </p>
              <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-semibold text-green-400 uppercase tracking-widest">System Active</span>
              </div>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-gray-400 hover:text-white"
                onClick={() => window.open('https://myaccount.google.com/permissions', '_blank')}
              >
                Manage Permissions
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
            <CardHeader className="border-b border-gray-800 p-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center shadow-lg">
                  <MessageSquare className="text-white h-6 w-6" />
                </div>
                <div>
                  <CardTitle className="text-xl">AI Reply Logs</CardTitle>
                  <CardDescription className="text-gray-500">Live automation history</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 flex flex-col items-center justify-center min-h-[220px]">
              <div className="text-center">
                <div className="bg-gray-800/20 p-4 rounded-full mb-4 inline-block">
                  <RefreshCcw className="text-gray-600 h-8 w-8" />
                </div>
                <h4 className="text-white font-medium mb-1">No logs available</h4>
                <p className="text-gray-500 text-sm">Sync now to begin processing your reviews.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
