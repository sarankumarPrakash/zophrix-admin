import React, { useEffect, useState } from "react";
import {
  Users,
  UserCheck,
  BadgeCheck,
  TrendingUp,
  Building2,
  IndianRupee,FileText, FileSpreadsheet, Download 
} from "lucide-react";


import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LineChart,
  Line,
  Tooltip,
} from "recharts";

const stats = [
  { icon: Users, value: "342", title: "Total Students", sub: "All registered" },
  { icon: UserCheck, value: "198", title: "Eligible Students", sub: "Meeting criteria" },
  { icon: BadgeCheck, value: "21", title: "Placed", sub: "6.1% rate" },
  { icon: TrendingUp, value: "6.1%", title: "Placement Rate", sub: "+2.3% vs last year" },
  { icon: Building2, value: "12", title: "Companies Visited", sub: "This semester" },
  { icon: IndianRupee, value: "12 LPA", title: "Highest Package", sub: "Razorpay" },
];

const departmentData = [
  { label: "CSE", value: 18 },
  { label: "IT", value: 9 },
  { label: "ECE", value: 5 },
  { label: "MECH", value: 2 },
  { label: "EEE", value: 1 },
];

const timelinePoints = [
  { month: "Jan", value: 2 },
  { month: "Feb", value: 5 },
  { month: "Mar", value: 8 },
  { month: "Apr", value: 6 },
];

const companyHiring = [
  { label: "Zoho", value: 8, max: 10 },
  { label: "TCS", value: 6, max: 10 },
  { label: "Freshworks", value: 4, max: 10 },
  { label: "Razorpay", value: 2, max: 10 },
  { label: "Infosys", value: 1, max: 10 },
];

const skillDemand = [
  { label: "React", value: 42, max: 50 },
  { label: "Node", value: 37, max: 50 },
  { label: "Python", value: 28, max: 50 },
  { label: "SQL", value: 24, max: 50 },
  { label: "DevOps", value: 14, max: 50 },
  { label: "System Design", value: 11, max: 50 },
];

function AnimatedBar({ percent }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setTimeout(() => setWidth(percent), 200);
  }, [percent]);

  return (
    <div className="h-[10px] rounded-full bg-[#1a2435] overflow-hidden flex-1">
      <div
        className="h-full bg-[#2ed760] rounded-full transition-all duration-700"
        style={{ width: `${width}%` }}
      />
    </div>
  );
}

function ProgressRow({ label, value, max }) {
  const percent = (value / max) * 100;

  return (
    <div className="grid grid-cols-[120px_1fr_28px] items-center gap-4">
      <span className="text-[15px] text-[#f1f5fa]">{label}</span>

      <AnimatedBar percent={percent} />

      <span className="text-right text-[15px] font-semibold text-[#f4f7fb]">
        {value}
      </span>
    </div>
  );
}

function StatCard({ icon: Icon, value, title, sub }) {
  return (
    <div className="rounded-[18px] card-theme h-[132px] flex flex-col items-center justify-center text-center p-4">
      <div className="w-[36px] h-[36px] rounded-full  flex items-center justify-center mb-3">
        <Icon size={17} className="text-[#7e8aa2]" />
      </div>

      <div className="text-[24px] font-bold text-[#f3f7fc]">{value}</div>

      <div className="text-[13px] text-[#7b879d] mt-2">{title}</div>

      <div className="text-[12px] font-semibold text-green-500 mt-1">{sub}</div>
    </div>
  );
}

function DepartmentPlacementCard() {
  return (
    <div className="rounded-[18px] card-theme p-5 h-[320px]">
      <h3 className="text-[16px] font-semibold text-[#edf2f8] mb-6">
        Department Placement
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={departmentData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#202b3d" />
          <XAxis dataKey="label" stroke="#74819a" />
          <YAxis stroke="#74819a" />
          <Tooltip
            contentStyle={{
              background: "#0e1625",
              border: "1px solid #182233",
            }}
          />

          <Bar dataKey="value" fill="#2ed760" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function PlacementTimelineCard() {
  return (
    <div className="rounded-[18px] card-theme p-5 h-[320px]">
      <h3 className="text-[16px] font-semibold text-[#edf2f8] mb-6">
        Placement Timeline
      </h3>

      <ResponsiveContainer width="100%" height="85%">
        <LineChart data={timelinePoints}>
          <CartesianGrid strokeDasharray="3 3" stroke="#202b3d" />

          <XAxis dataKey="month" stroke="#74819a" />

          <YAxis stroke="#74819a" />

          <Tooltip
            contentStyle={{
              background: "#0e1625",
              border: "1px solid #182233",
            }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="#2ed760"
            strokeWidth={3}
            dot={{ r: 6, fill: "#2ed760" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function ReportProgressCard({ title, data }) {
  return (
    <div className="rounded-[18px] border border-[#182233] card-theme p-5">
      <h3 className="text-[16px] font-semibold text-[#edf2f8] mb-6">{title}</h3>

      <div className="flex flex-col gap-5">
        {data.map((item) => (
          <ProgressRow
            key={item.label}
            label={item.label}
            value={item.value}
            max={item.max}
          />
        ))}
      </div>
    </div>
  );
}

function ExportReports() {
  return (
    <div className="rounded-[18px] border border-[#182233] card-theme p-6 mt-6">
      
      <h3 className="text-[16px] font-semibold text-[#edf2f8] mb-5">
        Export Reports
      </h3>

      <div className="flex items-center gap-4">

        {/* Excel */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-[10px] border border-[#243047] card-theme text-[#c9d2e0] text-[13px] hover:bg-[#121c2c] transition">
          <FileSpreadsheet size={16} />
          Export Excel
        </button>

        {/* PDF */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-[10px] border border-[#243047] card-theme text-[#c9d2e0] text-[13px] hover:bg-[#121c2c] transition">
          <FileText size={16} />
          Export PDF
        </button>

        {/* Main download */}
        <button className="flex items-center gap-2 px-5 py-2 rounded-[10px] bg-[#2ed760] text-black text-[13px] font-semibold hover:bg-[#26c455] transition">
          <Download size={16} />
          Download Placement Report
        </button>

      </div>
    </div>
  );
}

export default function Report() {
  return (
    <div className="min-h-screen bg-theme text-white font-sans p-6">

      {/* Stats */}
      <div className="grid grid-cols-6 gap-4 mb-6">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-5 mb-5">
        <DepartmentPlacementCard />
        <PlacementTimelineCard />
      </div>

      {/* Reports */}
      <div className="grid grid-cols-2 gap-5">
        <ReportProgressCard
          title="Company Hiring Report"
          data={companyHiring}
        />

        <ReportProgressCard
          title="Skill Demand"
          data={skillDemand}
        />
      </div>

      <ExportReports />
    </div>
  );
}