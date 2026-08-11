"use client";

import { Job, getTechnician, statusColors, priorityColors, technicians } from "@/lib/data";
import { formatDate, formatTime, cn } from "@/lib/utils";
import { X, MapPin, User, Clock, FileText, Phone } from "lucide-react";

interface JobDetailProps {
  job: Job;
  onClose: () => void;
}

export default function JobDetail({ job, onClose }: JobDetailProps) {
  const tech = getTechnician(job.technicianId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <p className="text-xs font-mono text-slate-400">{job.id}</p>
            <h2 className="font-semibold text-lg text-slate-900">{job.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 text-slate-500"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          <div className="flex flex-wrap gap-2">
            <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full border capitalize", statusColors[job.status])}>
              {job.status.replace("_", " ")}
            </span>
            <span className={cn("text-xs font-medium px-2.5 py-1 rounded-full capitalize", priorityColors[job.priority])}>
              {job.priority} priority
            </span>
          </div>

          <div>
            <h3 className="text-sm font-medium text-slate-500 mb-1">Description</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{job.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2">
              <User size={16} className="text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Customer</p>
                <p className="text-sm font-medium text-slate-800">{job.customer}</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Clock size={16} className="text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Scheduled</p>
                <p className="text-sm font-medium text-slate-800">
                  {formatDate(job.scheduledAt)} · {formatTime(job.scheduledAt)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2 sm:col-span-2">
              <MapPin size={16} className="text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Address</p>
                <p className="text-sm font-medium text-slate-800">{job.address}</p>
              </div>
            </div>
          </div>

          {tech ? (
            <div className="bg-slate-50 rounded-xl p-4">
              <p className="text-xs text-slate-400 mb-2">Assigned Technician</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-semibold">
                  {tech.avatar}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-slate-900">{tech.name}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1">
                    <Phone size={11} /> {tech.phone}
                  </p>
                </div>
                <span
                  className={cn(
                    "text-xs px-2 py-0.5 rounded-full capitalize",
                    tech.status === "available" && "bg-emerald-100 text-emerald-700",
                    tech.status === "on_job" && "bg-blue-100 text-blue-700",
                    tech.status === "offline" && "bg-slate-100 text-slate-500"
                  )}
                >
                  {tech.status.replace("_", " ")}
                </span>
              </div>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-100 rounded-xl p-4">
              <p className="text-sm text-amber-800 font-medium">Unassigned</p>
              <p className="text-xs text-amber-600 mt-0.5">
                Available: {technicians.filter((t) => t.status === "available").map((t) => t.name).join(", ") || "None"}
              </p>
            </div>
          )}

          {job.notes && (
            <div className="flex items-start gap-2">
              <FileText size={16} className="text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-xs text-slate-400">Notes</p>
                <p className="text-sm text-slate-700">{job.notes}</p>
              </div>
            </div>
          )}

          {job.completedAt && (
            <p className="text-xs text-emerald-600">
              Completed on {formatDate(job.completedAt)} at {formatTime(job.completedAt)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
