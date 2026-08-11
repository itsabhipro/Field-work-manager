"use client";

import { jobs, technicians, getStats } from "@/lib/data";
import StatCard from "./StatCard";
import JobCard from "./JobCard";
import { ClipboardList, Clock, CheckCircle2, Users, Activity } from "lucide-react";
import { Job } from "@/lib/data";

interface DashboardProps {
  onSelectJob: (job: Job) => void;
}

export default function Dashboard({ onSelectJob }: DashboardProps) {
  const stats = getStats();
  const recentJobs = [...jobs].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  ).slice(0, 5);
  const activeTechs = technicians.filter((t) => t.status !== "offline");

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
        <p className="text-sm text-slate-500 mt-1">
          Overview of field operations · {new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric" })}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard title="Total Jobs" value={stats.total} icon={ClipboardList} color="bg-brand-600" />
        <StatCard title="In Progress" value={stats.inProgress} icon={Activity} color="bg-indigo-500" />
        <StatCard title="Pending" value={stats.pending} icon={Clock} color="bg-amber-500" />
        <StatCard title="Completed" value={stats.completed} icon={CheckCircle2} color="bg-emerald-500" subtitle="This period" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Recent Jobs</h2>
            <span className="text-xs text-slate-400">{recentJobs.length} shown</span>
          </div>
          <div className="space-y-3">
            {recentJobs.map((job) => (
              <JobCard key={job.id} job={job} onClick={() => onSelectJob(job)} />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-slate-900">Technicians</h2>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Users size={12} /> {stats.availableTechs} available
            </span>
          </div>
          <div className="bg-white rounded-xl border border-slate-200 divide-y divide-slate-100 shadow-sm">
            {activeTechs.map((t) => (
              <div key={t.id} className="flex items-center gap-3 px-4 py-3">
                <div className="w-9 h-9 rounded-full bg-brand-600 text-white flex items-center justify-center text-xs font-semibold shrink-0">
                  {t.avatar}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-slate-900 truncate">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.completedJobs} jobs · ★ {t.rating}</p>
                </div>
                <span
                  className={
                    t.status === "available"
                      ? "w-2 h-2 rounded-full bg-emerald-500"
                      : "w-2 h-2 rounded-full bg-blue-500"
                  }
                  title={t.status}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
