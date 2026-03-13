import React, { useEffect, useState } from "react";
import {
  Users,
  UserCheck,
  BadgeCheck,
  TrendingUp,
  Building2,
  IndianRupee,
} from "lucide-react";

const stats = [
  { icon: Users, value: "342", title: "Total Students", sub: "All registered", subColor: "#22c55e" },
  { icon: UserCheck, value: "198", title: "Eligible Students", sub: "Meeting criteria", subColor: "#22c55e" },
  { icon: BadgeCheck, value: "21", title: "Placed", sub: "6.1% rate", subColor: "#22c55e" },
  { icon: TrendingUp, value: "6.1%", title: "Placement Rate", sub: "+2.3% vs last year", subColor: "#22c55e" },
  { icon: Building2, value: "12", title: "Companies Visited", sub: "This semester", subColor: "#22c55e" },
  { icon: IndianRupee, value: "12 LPA", title: "Highest Package", sub: "Razorpay", subColor: "#22c55e" },
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

const GREEN = "#2ed760";
const GREEN_DIM = "#20d65b";

const styles = {
  root: {
    minHeight: "100vh",
    width: "100%",
    background: "#0a1322",
    color: "#fff",
    fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
  },

  body: { padding: "24px" },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: 16,
    marginBottom: 24,
  },
  card: {
    borderRadius: 18,
    border: "1px solid #182233",
    background: "#0e1625",
    overflow: "hidden",
  },
  statCard: {
    height: 132,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "16px 12px",
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    background: "#131d2c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 700,
    lineHeight: 1,
    letterSpacing: "-0.02em",
    color: "#f3f7fc",
  },
  statTitle: { fontSize: 13, fontWeight: 500, color: "#7b879d", marginTop: 8 },
  statSub: { fontSize: 12, fontWeight: 600, color: "#22c55e", marginTop: 4 },
  row2: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
    marginBottom: 20,
  },
  row3: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 20,
  },
  cardPad: { padding: "20px" },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 600,
    letterSpacing: "-0.02em",
    color: "#edf2f8",
    marginBottom: 0,
  },
};

function AnimatedBar({ percent, delay = 0 }) {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(percent), 100 + delay);
    return () => clearTimeout(t);
  }, [percent, delay]);
  return (
    <div style={{ height: 10, borderRadius: 99, background: "#1a2435", overflow: "hidden", flex: 1 }}>
      <div
        style={{
          height: "100%",
          borderRadius: 99,
          background: GREEN,
          width: `${width}%`,
          transition: "width 0.7s cubic-bezier(0.4,0,0.2,1)",
        }}
      />
    </div>
  );
}

function ProgressRow({ label, value, max, index }) {
  const percent = (value / max) * 100;
  return (
    <div style={{ display: "grid", gridTemplateColumns: "120px 1fr 28px", alignItems: "center", gap: 16 }}>
      <span style={{ fontSize: 15, fontWeight: 500, color: "#f1f5fa" }}>{label}</span>
      <AnimatedBar percent={percent} delay={index * 80} />
      <span style={{ textAlign: "right", fontSize: 15, fontWeight: 600, color: "#f4f7fb" }}>{value}</span>
    </div>
  );
}

function StatCard({ icon: Icon, value, title, sub }) {
  return (
    <div style={{ ...styles.card, ...styles.statCard }}>
      <div style={styles.iconCircle}>
        <Icon size={17} color="#7e8aa2" strokeWidth={1.8} />
      </div>
      <div style={styles.statValue}>{value}</div>
      <div style={styles.statTitle}>{title}</div>
      <div style={styles.statSub}>{sub}</div>
    </div>
  );
}

function DepartmentPlacementCard() {
  const max = 20;
  const chartH = 240;
  const yLabels = [20, 15, 10, 5, 0];

  return (
    <div style={{ ...styles.card, ...styles.cardPad }}>
      <div style={styles.sectionTitle}>Department Placement</div>
      <div style={{ marginTop: 24, position: "relative", paddingLeft: 36, paddingBottom: 28 }}>
        {/* Y-axis labels */}
        <div style={{
          position: "absolute", left: 0, top: 0, height: chartH,
          display: "flex", flexDirection: "column", justifyContent: "space-between"
        }}>
          {yLabels.map(v => (
            <span key={v} style={{ fontSize: 12, color: "#6e7b92", lineHeight: 1 }}>{v}</span>
          ))}
        </div>

        {/* Grid lines */}
        <div style={{ position: "relative", height: chartH }}>
          {yLabels.map((_, i) => (
            <div key={i} style={{
              position: "absolute", left: 0, right: 0,
              top: `${(i / (yLabels.length - 1)) * 100}%`,
              borderTop: "1px dashed #202b3d",
            }} />
          ))}

          {/* Bars */}
          <div style={{ display: "flex", alignItems: "flex-end", height: "100%", gap: 12, justifyContent: "space-around" }}>
            {departmentData.map((item, i) => (
              <AnimatedDeptBar key={item.label} item={item} max={max} chartH={chartH} delay={i * 60} />
            ))}
          </div>
        </div>

        {/* X-axis labels */}
        <div style={{ display: "flex", justifyContent: "space-around", marginTop: 10 }}>
          {departmentData.map(item => (
            <span key={item.label} style={{ fontSize: 13, color: "#74819a", fontWeight: 500 }}>{item.label}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function AnimatedDeptBar({ item, max, chartH, delay }) {
  const [h, setH] = useState(0);
  const target = (item.value / max) * chartH;
  useEffect(() => {
    const t = setTimeout(() => setH(target), 150 + delay);
    return () => clearTimeout(t);
  }, [target, delay]);
  return (
    <div style={{ display: "flex", alignItems: "flex-end", flex: 1, height: "100%" }}>
      <div style={{
        width: "100%",
        height: h,
        maxWidth: 72,
        background: GREEN,
        borderRadius: "6px 6px 0 0",
        transition: "height 0.7s cubic-bezier(0.4,0,0.2,1)",
        margin: "0 auto",
      }} />
    </div>
  );
}

function PlacementTimelineCard() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setProgress(1), 200);
    return () => clearTimeout(t);
  }, []);

  const W = 620, H = 220, pX = 40, pY = 20, maxVal = 8;
  const pts = timelinePoints.map((item, i) => ({
    ...item,
    x: pX + (i / (timelinePoints.length - 1)) * (W - pX * 2),
    y: H - pY - (item.value / maxVal) * (H - pY * 2),
  }));

  const fullPath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const yLabels = [0, 2, 4, 6, 8];

  return (
    <div style={{ ...styles.card, ...styles.cardPad }}>
      <div style={styles.sectionTitle}>Placement Timeline</div>
      <div style={{ marginTop: 24 }}>
        <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", height: "auto", display: "block" }}>
          <defs>
            <clipPath id="lineClip">
              <rect x={pX} y={0} width={(W - pX * 2) * progress} height={H} />
            </clipPath>
          </defs>

          {/* Grid */}
          {[0, 1, 2, 3, 4].map(i => (
            <line key={i} x1={pX} y1={pY + i * ((H - pY * 2) / 4)} x2={W - pX} y2={pY + i * ((H - pY * 2) / 4)} stroke="#202b3d" strokeDasharray="4 5" />
          ))}
          {pts.map((p, i) => (
            <line key={i} x1={p.x} y1={pY} x2={p.x} y2={H - pY} stroke="#202b3d" strokeDasharray="4 5" />
          ))}

          {/* Baseline */}
          <line x1={pX} y1={H - pY} x2={W - pX} y2={H - pY} stroke="#495466" strokeWidth={1.5} />

          {/* Line */}
          <path d={fullPath} fill="none" stroke={GREEN_DIM} strokeWidth={3}
            strokeLinecap="round" strokeLinejoin="round" clipPath="url(#lineClip)"
            style={{ transition: "all 0.05s" }}
          />

          {/* Dots */}
          {pts.map((p, i) => (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={10} fill={GREEN_DIM} fillOpacity={0.12} />
              <circle cx={p.x} cy={p.y} r={6} fill={GREEN_DIM} />
            </g>
          ))}

          {/* Y labels */}
          {yLabels.map(v => {
            const y = H - pY - (v / maxVal) * (H - pY * 2);
            return <text key={v} x={10} y={y + 4} fontSize={12} fill="#6e7b92">{v}</text>;
          })}

          {/* X labels */}
          {pts.map(p => (
            <text key={p.month} x={p.x} y={H - 4} textAnchor="middle" fontSize={13} fill="#74819a">{p.month}</text>
          ))}
        </svg>
      </div>
    </div>
  );
}

function ReportProgressCard({ title, data }) {
  return (
    <div style={{ ...styles.card, ...styles.cardPad }}>
      <div style={styles.sectionTitle}>{title}</div>
      <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 20 }}>
        {data.map((item, i) => (
          <ProgressRow key={item.label} label={item.label} value={item.value} max={item.max} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Report() {
  return (
    <div style={styles.root}>
      {/* Body */}
      <div style={styles.body}>
        {/* Stats */}
        <div style={styles.statsGrid}>
          {stats.map(item => <StatCard key={item.title} {...item} />)}
        </div>

        {/* Charts row */}
        <div style={styles.row2}>
          <DepartmentPlacementCard />
          <PlacementTimelineCard />
        </div>

        {/* Progress rows */}
        <div style={styles.row3}>
          <ReportProgressCard title="Company Hiring Report" data={companyHiring} />
          <ReportProgressCard title="Skill Demand" data={skillDemand} />
        </div>
      </div>
    </div>
  );
}
