"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Dashboard from "@/components/Dashboard";
import JobsView from "@/components/JobsView";
import TechniciansView from "@/components/TechniciansView";
import JobDetail from "@/components/JobDetail";
import { Job } from "@/lib/data";
import { Settings } from "lucide-react";

export default function Home() {
  const [view, setView] = useState("dashboard");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar active={view} onNavigate={setView} />

      <main className="lg:pl-64 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 pt-16 lg:pt-6">
          {view === "dashboard" && <Dashboard onSelectJob={setSelectedJob} />}
          {view === "jobs" && <JobsView onSelectJob={setSelectedJob} />}
          {view === "technicians" && <TechniciansView />}
          {view === "settings" && (
            <div className="space-y-4">
              <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
              <div className="bg-white rounded-xl border border-slate-200 p-8 text-center">
                <Settings size={40} className="mx-auto text-slate-300 mb-3" />
                <p className="text-slate-500 text-sm">
                  Settings panel coming soon. This demo focuses on core job & technician workflows.
                </p>
                <p className="text-xs text-slate-400 mt-2">
                  Built with Next.js · TypeScript · Tailwind CSS
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {selectedJob && (
        <JobDetail job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
}
