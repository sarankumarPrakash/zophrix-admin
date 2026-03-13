import { useState } from "react";
import {
  Search,
  ChevronDown,
  BriefcaseBusiness,
  CalendarDays,
  Users,
  Eye,
  IndianRupee,
} from "lucide-react";

const upcomingDrives = [
  { company: "Zoho", role: "Backend Developer", package: "8 LPA", date: "25 Mar", eligible: "120", status: "Upcoming", statusType: "upcoming" },
  { company: "Freshworks", role: "Frontend Engineer", package: "10 LPA", date: "28 Mar", eligible: "95", status: "Registration", statusType: "registration" },
  { company: "Razorpay", role: "Software Engineer", package: "12 LPA", date: "5 Apr", eligible: "60", status: "Upcoming", statusType: "upcoming" },
  { company: "CRED", role: "Backend Intern", package: "6 LPA", date: "15 Apr", eligible: "45", status: "Upcoming", statusType: "upcoming" },
];

const activePipelines = [
  { company: "TCS", role: "Java Developer", package: "4.5 LPA", date: "12 Mar", eligible: "140", status: "Active", statusType: "active" },
  { company: "Infosys", role: "System Engineer", package: "5 LPA", date: "10 Mar", eligible: "120", status: "Active", statusType: "active" },
];

const completedDrives = [
  { company: "Wipro", role: "Full Stack Dev", package: "4 LPA", date: "5 Mar", eligible: "95", status: "Completed", statusType: "completed" },
  { company: "Cognizant", role: "Associate Developer", package: "4 LPA", date: "1 Mar", eligible: "110", status: "Completed", statusType: "completed" },
];

const badgeMap = {
  upcoming: { bg: "#102a4d", color: "#66a8ff", border: "#224a7a" },
  registration: { bg: "#103323", color: "#38d97d", border: "#1d5a3a" },
  active: { bg: "#3d2c09", color: "#f0b63f", border: "#6c4d12" },
  completed: { bg: "#1e2b3f", color: "#93a4b7", border: "#32445b" },
};

function InfoBox({ icon: Icon, value, label }) {
  return (
    <div className="card-theme  rounded-[10px] py-[7px] px-[4px] flex flex-col items-center gap-1">
      <Icon size={10} className="text-[#7f8da3]" strokeWidth={2} />

      <span className="text-[11px] font-semibold text-[#edf2f8] leading-none">
        {value}
      </span>

      <span className="text-[9px] text-[#7b879d] leading-none">
        {label}
      </span>
    </div>
  );
}

function DriveCard({ item }) {
  const badge = badgeMap[item.statusType] || badgeMap.completed;

  return (
    <div className="bg-theme border border-gray-600 rounded-2xl p-[14px] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">

      <div className="flex items-start justify-between mb-3">

        <div className="flex items-start gap-2.5">

          <div className="w-[34px] h-[34px] rounded-[10px] bg-theme border border-[#22304a] flex items-center justify-center flex-shrink-0">
            <BriefcaseBusiness size={14} className="text-green-400" strokeWidth={2.2}/>
          </div>

          <div>
            <div className="text-[14px] font-semibold text-[#edf2f8] leading-none">
              {item.company}
            </div>

            <div className="text-[10px] text-[#7b879d] mt-[5px]">
              {item.role}
            </div>
          </div>

        </div>

        <span
          className="text-[9px] font-bold rounded-full px-[9px] py-[3px] whitespace-nowrap"
          style={{
            background: badge.bg,
            color: badge.color,
            border: `1px solid ${badge.border}`,
          }}
        >
          {item.status}
        </span>

      </div>

      <div className="grid grid-cols-3 gap-2 mb-[10px]">
        <InfoBox icon={IndianRupee} value={item.package} label="Package" />
        <InfoBox icon={CalendarDays} value={item.date} label="Drive Date" />
        <InfoBox icon={Users} value={item.eligible} label="Eligible" />
      </div>

      <button className="w-full h-8 bg-theme border border-[#22304a] rounded-[10px] text-[11px] font-medium flex items-center justify-center gap-1.5 hover:bg-[#1b2a44] transition">

        <Eye size={12} className="" strokeWidth={2.2}/>
        View Pipeline

      </button>

    </div>
  );
}

function Section({ title, count, dotColor, items, cols = 3 }) {
  return (
    <div className="mb-6">

      <div className="flex items-center gap-2 mb-[14px]">

        <span
          className="w-[7px] h-[7px] rounded-full"
          style={{ background: dotColor }}
        />

        <span className="text-[13px] font-semibold text-[#edf2f8]">
          {title}
        </span>

        <span className="text-[12px] text-[#7b879d]">
          ({count})
        </span>

      </div>

      <div
        className="grid gap-4"
        style={{
          gridTemplateColumns: `repeat(${Math.min(cols, items.length)},1fr)`
        }}
      >
        {items.map((item) => (
          <DriveCard key={`${item.company}-${item.role}`} item={item}/>
        ))}
      </div>

    </div>
  );
}

export default function PlacementPipelineContent() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div className="min-h-screen bg-theme font-sans text-white px-6 py-5">

      <div className="flex items-center gap-[10px] mb-[22px]">

        <div className="flex items-center gap-2 bg-theme border border-[#22304a] rounded-[10px] px-3 h-9 w-[300px]">

          <Search size={13} className="text-[#7b879d]" />

          <input
            placeholder="Search company or role..."
            className="bg-transparent outline-none text-[#dbe3ed] text-[12px] w-full"
          />

        </div>

        <div className="relative flex items-center">

          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="appearance-none bg-theme border border-[#22304a] rounded-[10px] px-[14px] pr-[38px] h-9 text-[#dbe3ed] text-[12px] min-w-[170px] cursor-pointer outline-none"
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming Drives</option>
            <option value="active">Active Pipelines</option>
            <option value="completed">Completed Drives</option>
          </select>

          <ChevronDown
            size={13}
            className="absolute right-3 text-[#7f8da3] pointer-events-none"
          />

        </div>

      </div>

      {(selectedFilter === "all" || selectedFilter === "upcoming") && (
        <Section
          title="Upcoming Drives"
          count={upcomingDrives.length}
          dotColor="#35b7ff"
          items={upcomingDrives}
          cols={3}
        />
      )}

      {(selectedFilter === "all" || selectedFilter === "active") && (
        <Section
          title="Active Pipelines"
          count={activePipelines.length}
          dotColor="#f2b63a"
          items={activePipelines}
          cols={3}
        />
      )}

      {(selectedFilter === "all" || selectedFilter === "completed") && (
        <Section
          title="Completed Drives"
          count={completedDrives.length}
          dotColor="#c0ccd8"
          items={completedDrives}
          cols={3}
        />
      )}

    </div>
  );
}