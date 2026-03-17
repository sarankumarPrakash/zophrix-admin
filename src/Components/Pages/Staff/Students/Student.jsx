import React, { useMemo, useState } from "react";
import {
  Search,
  ChevronDown,
  Eye,
  ArrowLeft,
  Code2,
  Activity,
  Target,
  Trophy,
  BookOpen,
  Zap,
} from "lucide-react";

// ─── existing data ────────────────────────────────────────────────────────────
const students = [
  { name: "Priya Nair",      department: "CSE",   year: "Final Year", cgpa: 9.1, skills: ["Node", "DevOps", "React"] },
  { name: "Ananya Gupta",    department: "CSE",   year: "3rd Year",   cgpa: 8.8, skills: ["Python", "System Design"] },
  { name: "Arjun Kumar",     department: "CSE",   year: "Final Year", cgpa: 8.2, skills: ["React", "Node"] },
  { name: "Divya Sharma",    department: "CSE",   year: "Final Year", cgpa: 7.6, skills: ["Python", "Django"] },
  { name: "Sneha Reddy",     department: "CSE",   year: "Final Year", cgpa: 7.3, skills: ["React", "TypeScript"] },
  { name: "Rohan Patel",     department: "IT",    year: "Final Year", cgpa: 7.1, skills: ["React", "Node"] },
  { name: "Rahul Verma",     department: "IT",    year: "3rd Year",   cgpa: 6.8, skills: ["React", "SQL"] },
  { name: "Vikram Joshi",    department: "IT",    year: "Final Year", cgpa: 6.5, skills: ["Node", "SQL"] },
  { name: "Karthik S",       department: "ECE",   year: "3rd Year",   cgpa: 5.4, skills: ["Python"] },
  { name: "Meera Krishnan",  department: "CSE",   year: "3rd Year",   cgpa: 4.5, skills: ["SQL"] },
  { name: "Naveen Kumar",    department: "EEE",   year: "Final Year", cgpa: 7.9, skills: ["MATLAB", "Python"] },
  { name: "Aishwarya R",     department: "MECH",  year: "3rd Year",   cgpa: 6.9, skills: ["AutoCAD", "SolidWorks"] },
  { name: "Harini S",        department: "CIVIL", year: "Final Year", cgpa: 8.0, skills: ["AutoCAD", "STAAD Pro"] },
];

const getCgpaColor = (cgpa) => {
  if (cgpa >= 8) return "text-green-400";
  if (cgpa >= 6) return "text-yellow-400";
  return "text-red-400";
};

const FilterSelect = ({ value, onChange, options, defaultLabel }) => (
  <div className="relative">
    <select
      value={value}
      onChange={onChange}
      className="h-10 min-w-[140px] appearance-none rounded-xl border border-[#1A2233] card-theme px-4 pr-10 text-sm text-gray-300 outline-none"
    >
      <option value="">{defaultLabel}</option>
      {options.map((option, index) => (
        <option key={index} value={option} className="card-theme text-white">
          {option}
        </option>
      ))}
    </select>
    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
  </div>
);

// ─── Student Profile helpers ──────────────────────────────────────────────────
const GREEN = "#2db55d";
const CYAN  = "#22d3ee";
const AMBER = "#f59e0b";

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();
}

function buildSkillData(skills) {
  const allSkills = ["React", "Node.js", "System Design", "SQL", "Python", "DevOps"];
  const seed = skills.join("").length;
  return allSkills.map((s, i) => ({
    name: s,
    value: skills.some((sk) => s.toLowerCase().includes(sk.toLowerCase()) || sk.toLowerCase().includes(s.toLowerCase().split(".")[0]))
      ? 0.5 + ((seed * (i + 1)) % 40) / 100
      : 0.15 + ((seed * (i + 2)) % 30) / 100,
  }));
}

function RadarChart({ skills }) {
  const cx = 130, cy = 120, r = 80;
  const n = skills.length;
  const angle = (i) => (Math.PI * 2 * i) / n - Math.PI / 2;
  const pt = (i, radius) => ({ x: cx + radius * Math.cos(angle(i)), y: cy + radius * Math.sin(angle(i)) });
  const gridLevels = [0.25, 0.5, 0.75, 1];
  const dataPoints = skills.map((s, i) => pt(i, r * s.value));
  const dataPath = dataPoints.map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`).join(" ") + " Z";
  return (
    <svg width="260" height="240" className="block mx-auto">
      {gridLevels.map((level) => (
        <polygon key={level}
          points={skills.map((_, i) => { const p = pt(i, r * level); return `${p.x},${p.y}`; }).join(" ")}
          fill="none" stroke="#1a2e1f" strokeWidth="1"
        />
      ))}
      {skills.map((_, i) => { const end = pt(i, r); return <line key={i} x1={cx} y1={cy} x2={end.x} y2={end.y} stroke="#1a2e1f" strokeWidth="1" />; })}
      <path d={dataPath} fill="rgba(45,181,93,0.18)" stroke={GREEN} strokeWidth="1.5" />
      {dataPoints.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="3" fill={GREEN} />)}
      {skills.map((s, i) => { const p = pt(i, r + 16); return <text key={i} x={p.x} y={p.y} textAnchor="middle" dominantBaseline="middle" fill="#8898aa" fontSize="9">{s.name}</text>; })}
    </svg>
  );
}

function DonutChart({ completed, failed, active }) {
  const total = completed + failed + active;
  const r = 60, cx = 90, cy = 90, stroke = 22;
  const circ = 2 * Math.PI * r;
  const seg = (val) => (val / total) * circ;
  const gap = 3;
  const segments = [{ value: completed, color: GREEN }, { value: failed, color: "#e84040" }, { value: active, color: AMBER }];
  let offset = 0;
  const arcs = segments.map((s) => {
    const dash = seg(s.value) - gap;
    const arc = { ...s, dashOffset: circ - offset, dash };
    offset += seg(s.value);
    return arc;
  });
  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="180" height="180">
        {arcs.map((a, i) => (
          <circle key={i} cx={cx} cy={cy} r={r} fill="none" stroke={a.color} strokeWidth={stroke}
            strokeDasharray={`${a.dash} ${circ - a.dash}`} strokeDashoffset={a.dashOffset}
            style={{ transform: "rotate(-90deg)", transformOrigin: `${cx}px ${cy}px` }}
          />
        ))}
        <text x={cx} y={cy - 6} textAnchor="middle" fill="#edf2f8" fontSize="20" fontWeight="700">{total}</text>
        <text x={cx} y={cx + 10} textAnchor="middle" fill="#8898aa" fontSize="9">Total</text>
      </svg>
      <div className="flex gap-4">
        {[[GREEN, `Completed ${completed}`], ["#e84040", `Failed ${failed}`], [AMBER, `Active ${active}`]].map(([c, l]) => (
          <div key={l} className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full inline-block" style={{ background: c }} />
            <span className="text-[9px] text-[#8898aa]">{l}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function WeeklyChart({ data }) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const W = 360, H = 100, padX = 24, padY = 10;
  const maxV = Math.max(...data);
  const xs = data.map((_, i) => padX + (i / (data.length - 1)) * (W - padX * 2));
  const ys = data.map((v) => H - padY - (v / maxV) * (H - padY * 2));
  const path = xs.map((x, i) => `${i === 0 ? "M" : "L"}${x},${ys[i]}`).join(" ");
  const area = path + ` L${xs[xs.length - 1]},${H} L${xs[0]},${H} Z`;
  return (
    <svg width="100%" viewBox={`0 0 ${W} ${H + 20}`} className="block">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={GREEN} stopOpacity="0.25" />
          <stop offset="100%" stopColor={GREEN} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill="url(#areaGrad)" />
      <path d={path} fill="none" stroke={GREEN} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {xs.map((x, i) => <text key={i} x={x} y={H + 15} textAnchor="middle" fill="#4b5e74" fontSize="8">{days[i]}</text>)}
      <circle cx={xs[xs.length - 1]} cy={ys[ys.length - 1]} r="3" fill={GREEN} />
    </svg>
  );
}

// ─── Student Profile Page (full Tailwind) ─────────────────────────────────────
function StudentProfilePage({ student, onBack }) {
  const skillData  = buildSkillData(student.skills);
  const weeklyData = [6, 4, 5, 12, 9, 3, 0];
  const engScore   = Math.round(student.cgpa * 9.5);
  const actScore   = Math.round(student.cgpa * 8.2);
  const placePct   = Math.round(student.cgpa * 9);
  const rank       = Math.round((10 - student.cgpa) * 3 + 2);

  const Card = ({ children, className = "" }) => (
    <div className={`bg-[#111a27] border border-[#1e2d42] rounded-2xl p-4 ${className}`}>
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0d1117] text-white font-sans">
      <div className="px-5 pt-4 pb-6">

        {/* Back button */}
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-[#8898aa] text-xs mb-4 cursor-pointer bg-transparent border-none p-0"
        >
          <ArrowLeft size={13} /> Back
        </button>

        {/* Profile header card */}
        <Card className="mb-3.5">
          <div className="flex items-center gap-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold shrink-0"
              style={{ background: "#132e1e", border: `1.5px solid ${GREEN}`, color: GREEN }}
            >
              {getInitials(student.name)}
            </div>
            <div>
              <div className="text-base font-bold text-[#edf2f8]">{student.name}</div>
              <div className="text-[10px] text-[#8898aa] mt-0.5">{student.department} · {student.year}</div>
            </div>
          </div>
        </Card>

        {/* Stat grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-3.5">
          <Card>
            <div className="flex justify-between items-start">
              <Code2 size={12} color={GREEN} />
              <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ color: GREEN, background: "#0e2318", border: "1px solid #1a4a2e" }}>▲ +5</span>
            </div>
            <div className="text-[28px] font-bold text-[#edf2f8] mt-2 leading-none">{engScore}</div>
            <div className="text-[10px] text-[#8898aa] mt-1.5">Eng. Score</div>
          </Card>

          <Card>
            <div className="flex justify-between items-start">
              <Activity size={12} color={CYAN} />
              <span className="text-[9px] px-1.5 py-0.5 rounded-full" style={{ color: GREEN, background: "#0e2318", border: "1px solid #1a4a2e" }}>▲ +12</span>
            </div>
            <div className="text-[28px] font-bold text-[#edf2f8] mt-2 leading-none">{actScore}</div>
            <div className="text-[10px] text-[#8898aa] mt-1.5">Activity Score</div>
          </Card>

          <Card>
            <Target size={12} color={AMBER} />
            <div className="text-[28px] font-bold text-[#edf2f8] mt-2 leading-none">{placePct}%</div>
            <div className="text-[10px] text-[#8898aa] mt-1.5">Placement Ready</div>
            <div className="mt-2.5 h-1 bg-[#1a2535] rounded-full">
              <div className="h-full rounded-full" style={{ width: `${placePct}%`, background: GREEN }} />
            </div>
          </Card>

          <Card>
            <Trophy size={12} color="#a0aab8" />
            <div className="text-[28px] font-bold text-[#edf2f8] mt-2 leading-none">#{rank}</div>
            <div className="text-[10px] text-[#8898aa] mt-1.5">Rank / Percentile</div>
            <div className="text-[10px] font-semibold mt-1.5" style={{ color: GREEN }}>Top 8%</div>
          </Card>
        </div>

        {/* Row 1: Skill Radar & Challenge Success */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5">
          <Card>
            <div className="flex items-center gap-2 mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: GREEN }} />
              <span className="text-xs font-semibold text-[#edf2f8]">Skill Radar</span>
            </div>
            <RadarChart skills={skillData} />
          </Card>

          <Card>
            <div className="flex items-center gap-2 mb-2.5">
              <Zap size={12} color={AMBER} />
              <span className="text-xs font-semibold text-[#edf2f8]">Challenge Success</span>
            </div>
            <DonutChart completed={12} failed={3} active={1} />
          </Card>
        </div>

        {/* Row 2: Weekly Activity & Skill Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          <Card>
            <div className="flex items-center gap-2 mb-2.5">
              <Activity size={12} color={CYAN} />
              <span className="text-xs font-semibold text-[#edf2f8]">Weekly Activity</span>
            </div>
            <WeeklyChart data={weeklyData} />
          </Card>

          <Card>
            <div className="flex items-center gap-2 mb-3.5">
              <BookOpen size={12} color={GREEN} />
              <span className="text-xs font-semibold text-[#edf2f8]">Skill Breakdown</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {skillData.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[11px] text-[#c8d4e0]">{s.name}</span>
                    <span className="text-[10px] text-[#8898aa]">{Math.round(s.value * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-[#1a2535] rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${Math.round(s.value * 100)}%`, background: GREEN }} />
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

// ─── existing Students component (unchanged) + routing state ─────────────────
export default function Students() {
  const [search,       setSearch]       = useState("");
  const [selectedDept, setSelectedDept] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [viewStudent,  setViewStudent]  = useState(null);

  const departments = ["CSE", "IT", "ECE", "EEE", "MECH", "CIVIL"];
  const years       = ["3rd Year", "Final Year"];

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.department.toLowerCase().includes(search.toLowerCase()) ||
        student.skills.some((skill) => skill.toLowerCase().includes(search.toLowerCase()));
      const matchesDept = selectedDept ? student.department === selectedDept : true;
      const matchesYear = selectedYear ? student.year === selectedYear : true;
      return matchesSearch && matchesDept && matchesYear;
    });
  }, [search, selectedDept, selectedYear]);

  if (viewStudent) {
    return <StudentProfilePage student={viewStudent} onBack={() => setViewStudent(null)} />;
  }

  return (
    <div className="w-full max-w-full overflow-x-hidden">
      <div className="sticky top-0 z-30 mb-4 pb-3 pt-1">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex h-10 w-full max-w-sm items-center rounded-xl border border-[#1A2233] card-theme px-3">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="ml-2 w-full bg-transparent text-sm text-white placeholder:text-gray-500 focus:outline-none"
            />
          </div>
          <FilterSelect value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)} options={departments} defaultLabel="All Depts" />
          <FilterSelect value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} options={years}       defaultLabel="All Years" />
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#1A2233] card-theme">
        <div className="max-h-[70vh] overflow-y-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead className="sticky top-0 z-20 card-theme">
              <tr className="text-left text-sm text-gray-400">
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">Name</th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">Department</th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">Year</th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">CGPA</th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">Verified Skills</th>
                <th className="border-b border-[#1A2233] px-5 py-4 font-medium">Profile</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.length > 0 ? (
                filteredStudents.map((student, index) => (
                  <tr key={index} className="text-sm text-gray-300 hover:card-theme">
                    <td className="border-b border-[#182133] px-5 py-5 font-medium text-white">{student.name}</td>
                    <td className="border-b border-[#182133] px-5 py-5">{student.department}</td>
                    <td className="border-b border-[#182133] px-5 py-5">{student.year}</td>
                    <td className={`border-b border-[#182133] px-5 py-5 font-semibold ${getCgpaColor(student.cgpa)}`}>{student.cgpa}</td>
                    <td className="border-b border-[#182133] px-5 py-5">
                      <div className="flex flex-wrap gap-2">
                        {student.skills.map((skill, i) => (
                          <span key={i} className="rounded-full bg-[#1F2937] px-3 py-1 text-xs text-gray-300">{skill}</span>
                        ))}
                      </div>
                    </td>
                    <td className="border-b border-[#182133] px-5 py-5">
                      <button
                        onClick={() => setViewStudent(student)}
                        className="flex items-center gap-2 text-gray-200 hover:text-white"
                      >
                        <Eye className="h-4 w-4" />
                        <span>View</span>
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="px-5 py-8 text-center text-sm text-gray-400">No students found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}