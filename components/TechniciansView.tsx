"use client";

import { technicians } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Phone, Mail, Star } from "lucide-react";

export default function TechniciansView() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Technicians</h1>
        <p className="text-sm text-slate-500 mt-1">Field team overview and status</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {technicians.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                {t.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-semibold text-slate-900">{t.name}</h3>
                  <span
                    className={cn(
                      "text-xs px-2 py-0.5 rounded-full capitalize",
                      t.status === "available" && "bg-emerald-100 text-emerald-700",
                      t.status === "on_job" && "bg-blue-100 text-blue-700",
                      t.status === "offline" && "bg-slate-100 text-slate-500"
                    )}
                  >
                    {t.status.replace("_", " ")}
                  </span>
                </div>
                <div className="mt-2 space-y-1 text-sm text-slate-500">
                  <p className="flex items-center gap-1.5">
                    <Mail size={13} /> {t.email}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Phone size={13} /> {t.phone}
                  </p>
                </div>
                <div className="mt-3 flex items-center gap-4 text-sm">
                  <span className="text-slate-600">
                    <strong className="text-slate-900">{t.completedJobs}</strong> jobs
                  </span>
                  <span className="flex items-center gap-1 text-amber-600">
                    <Star size={14} fill="currentColor" /> {t.rating}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
