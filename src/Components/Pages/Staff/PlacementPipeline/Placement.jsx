import { useState } from "react";
import {
  Search,
  ChevronDown,
  BriefcaseBusiness,
  CalendarDays,
  Users,
  Eye,
  IndianRupee,
  ArrowLeft,
  CheckCircle2,
  Edit2,
  Upload,
  Clock,
  ChevronRight,
  X,
  Plus,
  Download
} from "lucide-react";

// --- NEENGA KUDUTHA ATHE DATA (STRICTLY NO CHANGES) ---
const upcomingDrives = [
  { company: "Zoho", role: "Backend Developer", package: "8 LPA", date: "25 Mar", eligible: "120", selected: "5", status: "Upcoming", statusType: "upcoming" },
  { company: "Freshworks", role: "Frontend Engineer", package: "10 LPA", date: "28 Mar", eligible: "95", selected: "8", status: "Registration", statusType: "registration" },
  { company: "Razorpay", role: "Software Engineer", package: "12 LPA", date: "5 Apr", eligible: "60", selected: "3", status: "Upcoming", statusType: "upcoming" },
  { company: "CRED", role: "Backend Intern", package: "6 LPA", date: "15 Apr", eligible: "45", selected: "2", status: "Upcoming", statusType: "upcoming" },
];

const activePipelines = [
  { company: "TCS", role: "Java Developer", package: "4.5 LPA", date: "12 Mar", eligible: "140", selected: "12", status: "Active", statusType: "active" },
  { company: "Infosys", role: "System Engineer", package: "5 LPA", date: "10 Mar", eligible: "120", selected: "10", status: "Active", statusType: "active" },
];

const completedDrives = [
  { company: "Wipro", role: "Full Stack Dev", package: "4 LPA", date: "5 Mar", eligible: "95", selected: "15", status: "Completed", statusType: "completed" },
  { company: "Cognizant", role: "Associate Developer", package: "4 LPA", date: "1 Mar", eligible: "110", selected: "18", status: "Completed", statusType: "completed" },
];

const pipelineSteps = [
  { label: "Eligible Students", date: "Mar 10", count: "120", progress: 100 },
  { label: "Mock Interview", date: "Mar 15", count: "85", progress: 70 },
  { label: "Online Assessment", date: "Mar 18", count: "42", progress: 40 },
  { label: "Technical Interview", date: "Mar 20", count: "18", progress: 20 },
  { label: "Shortlisted", date: "Mar 22", count: "9", progress: 10 },
  { label: "Final Offer", date: "Mar 25", count: "5", progress: 5 },
];

const studentTableData = [
  { name: "Priya Nair", reg: "21CSE001", dept: "CSE", score: "92", status: "Eligible" },
  { name: "Arjun Kumar", reg: "21CSE004", dept: "CSE", score: "87", status: "Eligible" },
  { name: "Sneha Reddy", reg: "21CSE008", dept: "CSE", score: "73", status: "Eligible" },
  { name: "Rohan Patel", reg: "21IT010", dept: "IT", score: "71", status: "Eligible" },
];

const badgeMap = {
  upcoming: { bg: "#102a4d", color: "#66a8ff", border: "#224a7a" },
  registration: { bg: "#103323", color: "#38d97d", border: "#1d5a3a" },
  active: { bg: "#3d2c09", color: "#f0b63f", border: "#6c4d12" },
  completed: { bg: "#1e2b3f", color: "#93a4b7", border: "#32445b" },
};

// --- SUB-COMPONENTS ---

function StudentDetailsTable() {
  return (
    <div className="mt-4 mb-6 rounded-xl border border-gray-700 overflow-hidden animate-in slide-in-from-top-2">
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        <span className="text-[11px] text-gray-500 font-medium">4 students</span>
        <div className="flex gap-4">
          <button className="flex items-center gap-1.5 text-[11px] text-white/80 hover:text-white">
            <Plus size={14} /> Add Student
          </button>
          <button className="flex items-center gap-1.5 text-[11px] text-white/80 hover:text-white">
            <Download size={14} /> CSV
          </button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-[10px] text-gray-500 uppercase tracking-wider border-b border-gray-700/50">
            <th className="px-6 py-3 font-medium">Student</th>
            <th className="px-6 py-3 font-medium">Reg No</th>
            <th className="px-6 py-3 font-medium">Dept</th>
            <th className="px-6 py-3 font-medium">Score</th>
            <th className="px-6 py-3 font-medium">Status</th>
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="text-[12px]">
          {studentTableData.map((s, i) => {
            // SCORE COLOR LOGIC
            const scoreVal = parseInt(s.score);
            let scoreColor = "text-white"; 
            if (scoreVal >= 90) scoreColor = "text-green-400";
            else if (scoreVal >= 75) scoreColor = "text-yellow-500";
            else scoreColor = "text-red-400";

            return (
              <tr key={i} className="border-b border-gray-700 last:border-0 hover:bg-white/[0.02]">
                <td className="px-6 py-4 text-white font-medium">{s.name}</td>
                <td className="px-6 py-4 text-gray-400">{s.reg}</td>
                <td className="px-6 py-4 text-gray-400">{s.dept}</td>
                <td className={`px-6 py-4 font-bold ${scoreColor}`}>
                  {s.score}
                </td>
                <td className="px-6 py-4">
                  <span className=" text-[#66a8ff] px-3 py-1 rounded-full text-[10px] border border-[#224a7a] font-medium">
                    {s.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <X size={14} className="text-gray-600 cursor-pointer hover:text-red-400 inline" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function PipelineDetails({ drive, onBack }) {
  const [openStep, setOpenStep] = useState(null);

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={onBack} className="p-2 border border-gray-700 rounded-lg hover:bg-white/5 transition">
          <ArrowLeft size={16} />
        </button>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl border border-gray-700 flex items-center justify-center">
            <BriefcaseBusiness size={18} className="text-green-400" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">{drive.company}</h2>
            <p className="text-xs text-[#7b879d]">{drive.role}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-8">
        {[
          { icon: IndianRupee, val: drive.package, label: "Package" },
          { icon: CalendarDays, val: drive.date, label: "Drive Date" },
          { icon: Users, val: drive.eligible, label: "Eligible" },
          { icon: Clock, val: drive.selected || '0', label: "Selected" }
        ].map((item, i) => (
          <div key={i} className="p-4 rounded-xl border border-gray-700 flex flex-col items-center bg-white/[0.02]">
            <item.icon size={14} className="text-[#7f8da3] mb-2" />
            <span className="text-sm font-bold text-white">{item.val}</span>
            <span className="text-[10px] text-[#7b879d]">{item.label}</span>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl border border-gray-700 mb-6 bg-white/[0.01]">
        <h3 className="text-sm font-semibold mb-8 text-white">Pipeline Progress</h3>
        <div className="space-y-0">
          {pipelineSteps.map((step, idx) => (
            <div key={idx}>
              <div 
                className="flex gap-6 cursor-pointer group"
                onClick={() => setOpenStep(openStep === step.label ? null : step.label)}
              >
                <div className="flex flex-col items-center">
                  <CheckCircle2 size={18} className="text-green-500 z-10 bg-[#0b1120]" />
                  {idx !== pipelineSteps.length - 1 && (
                    <div className="w-[1px] h-full min-h-[40px] bg-green-500/50 group-hover:bg-green-500 transition-colors" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`text-[12px] font-medium transition-colors ${openStep === step.label ? 'text-green-400' : 'text-white'}`}>
                      {step.label}
                    </span>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="text-[#7b879d]">{step.date}</span>
                        <span className="text-white font-bold">{step.count}</span>
                        <ChevronRight size={12} className={`text-[#7b879d] transition-transform ${openStep === step.label ? 'rotate-90' : ''}`} />
                      </div>
                      <div className="flex gap-3 text-[#7b879d]">
                        <Edit2 size={13} className="hover:text-white" />
                        <Upload size={13} className="hover:text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="w-full  h-1.5 rounded-full overflow-hidden mb-4 border border-gray-700/30">
                    <div className="bg-green-500 h-full rounded-full transition-all duration-500" style={{ width: `${step.progress}%` }} />
                  </div>
                  {openStep === step.label && <StudentDetailsTable />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 rounded-2xl border border-gray-700 bg-card-theme">
        <h3 className="text-sm font-semibold mb-6 text-white">Drive Timeline</h3>
        <div className="space-y-5">
           {pipelineSteps.map((step, idx) => (
             <div key={idx} className="flex items-center gap-3">
               <span className="text-[10px] text-[#7b879d] w-12 text-right font-medium">{step.date}</span>
               <div className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0" />
               <span className="text-[11px] font-medium text-white/90">{step.label}</span>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
}

// --- MAIN LISTING PAGE ---

function DriveCard({ item, onViewPipeline }) {
  const badge = badgeMap[item.statusType] || badgeMap.completed;

  return (
    <div className="border border-gray-700 rounded-2xl p-[14px] bg-card-theme hover:border-gray-500 transition-all">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-2.5">
          <div className="w-[34px] h-[34px] rounded-[10px] border border-gray-700 flex items-center justify-center">
            <BriefcaseBusiness size={14} className="text-green-400" strokeWidth={2.2}/>
          </div>
          <div>
            <div className="text-[14px] font-semibold text-[#edf2f8] leading-none">{item.company}</div>
            <div className="text-[10px] text-[#7b879d] mt-[5px]">{item.role}</div>
          </div>
        </div>
        <span className="text-[9px] font-bold rounded-full px-[9px] py-[3px]" style={{ background: badge.bg, color: badge.color, border: `1px solid ${badge.border}` }}>
          {item.status}
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { icon: IndianRupee, val: item.package, label: "Package" },
          { icon: CalendarDays, val: item.date, label: "Date" },
          { icon: Users, val: item.eligible, label: "Eligible" }
        ].map((info, idx) => (
          <div key={idx} className="rounded-[10px] py-2 flex flex-col items-center border border-gray-700 bg-card-theme">
            <info.icon size={10} className="text-[#7f8da3] mb-1" />
            <span className="text-[11px] font-semibold text-white leading-none">{info.val}</span>
            <span className="text-[8px] text-[#7b879d] uppercase tracking-tighter mt-1">{info.label}</span>
          </div>
        ))}
      </div>
      <button 
        onClick={() => onViewPipeline(item)} 
        className="w-full h-8 border border-gray-700 rounded-[10px] text-[11px] font-medium flex items-center justify-center gap-1.5 hover:bg-white/5 transition text-white"
      >
        <Eye size={12} strokeWidth={2.2}/>
        View Pipeline
      </button>
    </div>
  );
}

export default function PlacementPipelineContent() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedDrive, setSelectedDrive] = useState(null);

  if (selectedDrive) {
    return (
      <div className="min-h-screen bg-card-theme font-sans text-white px-6 py-5">
        <PipelineDetails drive={selectedDrive} onBack={() => setSelectedDrive(null)} />
      </div>
    );
  }

  return (
    <div className="min-h-screen  font-sans text-white px-6 py-5">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex items-center gap-2 border border-gray-700 rounded-[10px] px-3 h-10 w-[320px] ">
          <Search size={14} className="text-[#7b879d]" />
          <input placeholder="Search company or role..." className="bg-transparent outline-none text-white text-sm w-full" />
        </div>
        <div className="relative flex items-center">
          <select 
            value={selectedFilter} 
            onChange={(e) => setSelectedFilter(e.target.value)} 
            className="appearance-none bg-transparent border border-gray-700 rounded-[10px] px-4 pr-10 h-10 text-white text-sm outline-none cursor-pointer hover:border-gray-500 transition"
          >
            <option value="all" className="bg-card-theme">All Status</option>
            <option value="upcoming" className="bg-card-theme">Upcoming Drives</option>
            <option value="active" className="bg-card-theme">Active Pipelines</option>
            <option value="completed" className="bg-card-theme">Completed Drives</option>
          </select>
          <ChevronDown size={14} className="absolute right-3 text-[#7f8da3] pointer-events-none" />
        </div>
      </div>

      <div className="space-y-10">
        {(selectedFilter === "all" || selectedFilter === "upcoming") && (
          <Section title="Upcoming Drives" count={upcomingDrives.length} dotColor="#35b7ff" items={upcomingDrives} onViewPipeline={setSelectedDrive} />
        )}
        {(selectedFilter === "all" || selectedFilter === "active") && (
          <Section title="Active Pipelines" count={activePipelines.length} dotColor="#f2b63a" items={activePipelines} onViewPipeline={setSelectedDrive} />
        )}
        {(selectedFilter === "all" || selectedFilter === "completed") && (
          <Section title="Completed Drives" count={completedDrives.length} dotColor="#c0ccd8" items={completedDrives} onViewPipeline={setSelectedDrive} />
        )}
      </div>
    </div>
  );
}

function Section({ title, count, dotColor, items, onViewPipeline }) {
  return (
    <div>
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-2 rounded-full" style={{ background: dotColor }} />
        <span className="text-[14px] font-bold text-white">{title} ({count})</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, idx) => (
          <DriveCard key={idx} item={item} onViewPipeline={onViewPipeline} />
        ))}
      </div>
    </div>
  );
}