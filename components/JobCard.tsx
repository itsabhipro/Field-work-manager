import { Job, getTechnician, statusColors, priorityColors } from "@/lib/data";
import { formatDate, formatTime, cn } from "@/lib/utils";
import { MapPin, User, Clock } from "lucide-react";

interface JobCardProps {
  job: Job;
  onClick?: () => void;
}

export default function JobCard({ job, onClick }: JobCardProps) {
  const tech = getTechnician(job.technicianId);

  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-white rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md hover:border-brand-300 transition-all"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-mono text-slate-400">{job.id}</span>
            <span
              className={cn(
                "text-xs font-medium px-2 py-0.5 rounded-full border",
                statusColors[job.status]
              )}
            >
              {job.status.replace("_", " ")}
            </span>
            <span
              className={cn(
                "text-xs font-medium px-2 py-0.5 rounded-full capitalize",
                priorityColors[job.priority]
              )}
            >
              {job.priority}
            </span>
          </div>
          <h3 className="mt-1.5 font-semibold text-slate-900 truncate">{job.title}</h3>
          <p className="mt-0.5 text-sm text-slate-500 truncate">{job.customer}</p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <MapPin size={12} />
          <span className="truncate max-w-[180px]">{job.address}</span>
        </span>
        <span className="flex items-center gap-1">
          <Clock size={12} />
          {formatDate(job.scheduledAt)} · {formatTime(job.scheduledAt)}
        </span>
        {tech && (
          <span className="flex items-center gap-1">
            <User size={12} />
            {tech.name}
          </span>
        )}
      </div>
    </button>
  );
}
