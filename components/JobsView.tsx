"use client";

import { useState, useMemo } from "react";
import { jobs, Job, JobStatus } from "@/lib/data";
import JobCard from "./JobCard";
import { Search, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

const filters: { label: string; value: JobStatus | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Pending", value: "pending" },
  { label: "Assigned", value: "assigned" },
  { label: "In Progress", value: "in_progress" },
  { label: "Completed", value: "completed" },
];

interface JobsViewProps {
  onSelectJob: (job: Job) => void;
}

export default function JobsView({ onSelectJob }: JobsViewProps) {
  const [filter, setFilter] = useState<JobStatus | "all">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return jobs.filter((j) => {
      const matchStatus = filter === "all" || j.status === filter;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        j.title.toLowerCase().includes(q) ||
        j.customer.toLowerCase().includes(q) ||
        j.id.toLowerCase().includes(q) ||
        j.address.toLowerCase().includes(q);
      return matchStatus && matchSearch;
    });
  }, [filter, search]);

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Jobs</h1>
        <p className="text-sm text-slate-500 mt-1">Manage and track all service jobs</p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search jobs, customers, addresses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        <Filter size={14} className="text-slate-400 shrink-0" />
        {filters.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors",
              filter === f.value
                ? "bg-brand-600 text-white"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <p className="text-xs text-slate-400">{filtered.length} job{filtered.length !== 1 ? "s" : ""}</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {filtered.map((job) => (
          <JobCard key={job.id} job={job} onClick={() => onSelectJob(job)} />
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full text-center py-12 text-slate-400 text-sm">
            No jobs match your filters.
          </div>
        )}
      </div>
    </div>
  );
}
