export type JobStatus = "pending" | "assigned" | "in_progress" | "completed" | "cancelled";
export type Priority = "low" | "medium" | "high" | "urgent";
export type Role = "admin" | "technician";

export interface Technician {
  id: string;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  status: "available" | "on_job" | "offline";
  completedJobs: number;
  rating: number;
}

export interface Job {
  id: string;
  title: string;
  description: string;
  customer: string;
  address: string;
  status: JobStatus;
  priority: Priority;
  technicianId: string | null;
  scheduledAt: string;
  completedAt: string | null;
  notes: string;
  createdAt: string;
}

export const technicians: Technician[] = [
  {
    id: "t1",
    name: "Ahmed Al-Rashid",
    email: "ahmed@fieldops.com",
    phone: "+965 5001 2345",
    avatar: "AR",
    status: "on_job",
    completedJobs: 142,
    rating: 4.8,
  },
  {
    id: "t2",
    name: "Sara Hassan",
    email: "sara@fieldops.com",
    phone: "+965 5002 3456",
    avatar: "SH",
    status: "available",
    completedJobs: 98,
    rating: 4.9,
  },
  {
    id: "t3",
    name: "Omar Khalil",
    email: "omar@fieldops.com",
    phone: "+965 5003 4567",
    avatar: "OK",
    status: "on_job",
    completedJobs: 76,
    rating: 4.6,
  },
  {
    id: "t4",
    name: "Layla Mahmoud",
    email: "layla@fieldops.com",
    phone: "+965 5004 5678",
    avatar: "LM",
    status: "offline",
    completedJobs: 55,
    rating: 4.7,
  },
];

export const jobs: Job[] = [
  {
    id: "JOB-1001",
    title: "AC Unit Repair - Villa 12",
    description: "Customer reports AC not cooling. Check compressor and refrigerant levels.",
    customer: "Mohammed Al-Sabah",
    address: "Block 5, Street 12, Villa 12, Salmiya",
    status: "in_progress",
    priority: "high",
    technicianId: "t1",
    scheduledAt: "2026-08-11T09:00:00",
    completedAt: null,
    notes: "Customer prefers morning visits.",
    createdAt: "2026-08-10T14:30:00",
  },
  {
    id: "JOB-1002",
    title: "Electrical Panel Inspection",
    description: "Annual safety inspection of main electrical panel and breakers.",
    customer: "Kuwait Towers Office",
    address: "Kuwait Towers, Floor 8, Office 802",
    status: "assigned",
    priority: "medium",
    technicianId: "t3",
    scheduledAt: "2026-08-11T11:00:00",
    completedAt: null,
    notes: "",
    createdAt: "2026-08-09T10:00:00",
  },
  {
    id: "JOB-1003",
    title: "Water Heater Replacement",
    description: "Replace old water heater with new 50L unit. Customer already purchased unit.",
    customer: "Fatima Al-Ali",
    address: "Block 2, Street 5, Apt 14, Hawally",
    status: "pending",
    priority: "urgent",
    technicianId: null,
    scheduledAt: "2026-08-11T14:00:00",
    completedAt: null,
    notes: "Unit is in the basement storage.",
    createdAt: "2026-08-11T08:15:00",
  },
  {
    id: "JOB-1004",
    title: "Network Cabling - New Office",
    description: "Install Cat6 cabling for 12 workstations and configure switch.",
    customer: "TechStart Kuwait",
    address: "Sharq, Al-Soor St, Building 4, Floor 3",
    status: "completed",
    priority: "medium",
    technicianId: "t2",
    scheduledAt: "2026-08-10T09:00:00",
    completedAt: "2026-08-10T15:30:00",
    notes: "All ports tested and labeled.",
    createdAt: "2026-08-08T16:00:00",
  },
  {
    id: "JOB-1005",
    title: "Generator Maintenance",
    description: "Quarterly preventive maintenance on backup generator.",
    customer: "Al-Salam Hospital",
    address: "Jabriya, Hospital Complex, Generator Room",
    status: "assigned",
    priority: "high",
    technicianId: "t1",
    scheduledAt: "2026-08-12T08:00:00",
    completedAt: null,
    notes: "Access code: 4821",
    createdAt: "2026-08-07T11:20:00",
  },
  {
    id: "JOB-1006",
    title: "Plumbing - Leak Repair",
    description: "Kitchen sink leak under cabinet. Shut-off valve may need replacement.",
    customer: "Yousef Al-Mutairi",
    address: "Block 8, Street 3, House 22, Farwaniya",
    status: "pending",
    priority: "medium",
    technicianId: null,
    scheduledAt: "2026-08-12T10:30:00",
    completedAt: null,
    notes: "",
    createdAt: "2026-08-11T07:45:00",
  },
  {
    id: "JOB-1007",
    title: "CCTV Camera Installation",
    description: "Install 4 outdoor cameras and connect to existing NVR.",
    customer: "Al-Rai Warehouse",
    address: "Al-Rai Industrial Area, Warehouse 17",
    status: "in_progress",
    priority: "low",
    technicianId: "t3",
    scheduledAt: "2026-08-11T13:00:00",
    completedAt: null,
    notes: "Ladder available on site.",
    createdAt: "2026-08-09T09:00:00",
  },
  {
    id: "JOB-1008",
    title: "HVAC Filter Replacement",
    description: "Replace all filters on central HVAC system (12 units).",
    customer: "Marina Mall Management",
    address: "Marina Mall, Maintenance Level B1",
    status: "completed",
    priority: "low",
    technicianId: "t2",
    scheduledAt: "2026-08-09T08:00:00",
    completedAt: "2026-08-09T12:00:00",
    notes: "Used OEM filters.",
    createdAt: "2026-08-05T14:00:00",
  },
];

export const statusColors: Record<JobStatus, string> = {
  pending: "bg-amber-100 text-amber-800 border-amber-200",
  assigned: "bg-blue-100 text-blue-800 border-blue-200",
  in_progress: "bg-indigo-100 text-indigo-800 border-indigo-200",
  completed: "bg-emerald-100 text-emerald-800 border-emerald-200",
  cancelled: "bg-slate-100 text-slate-600 border-slate-200",
};

export const priorityColors: Record<Priority, string> = {
  low: "bg-slate-100 text-slate-600",
  medium: "bg-sky-100 text-sky-700",
  high: "bg-orange-100 text-orange-700",
  urgent: "bg-red-100 text-red-700",
};

export function getTechnician(id: string | null) {
  if (!id) return null;
  return technicians.find((t) => t.id === id) ?? null;
}

export function getStats() {
  const total = jobs.length;
  const pending = jobs.filter((j) => j.status === "pending").length;
  const inProgress = jobs.filter((j) => j.status === "in_progress").length;
  const completed = jobs.filter((j) => j.status === "completed").length;
  const availableTechs = technicians.filter((t) => t.status === "available").length;
  return { total, pending, inProgress, completed, availableTechs };
}
