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

const BG_PAGE = "#0b1424";
const BG_CARD = "#101b2d";
const BG_INNER = "#162338";
const BORDER = "#22304a";

function InfoBox({ icon: Icon, value, label }) {
  return (
    <div
      style={{
        background: BG_INNER,
        border: `1px solid ${BORDER}`,
        borderRadius: 10,
        padding: "8px 4px 7px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 4,
      }}
    >
      <Icon size={10} color="#7f8da3" strokeWidth={2} />
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: "#edf2f8",
          lineHeight: 1,
        }}
      >
        {value}
      </span>
      <span
        style={{
          fontSize: 9,
          color: "#7b879d",
          lineHeight: 1,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function DriveCard({ item }) {
  const badge = badgeMap[item.statusType] || badgeMap.completed;

  return (
    <div
      style={{
        background: BG_CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: 16,
        padding: "14px 14px 12px",
        boxShadow: "0 0 0 1px rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginBottom: 12,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "#162338",
              border: "1px solid #22304a",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <BriefcaseBusiness size={14} color="#30d66b" strokeWidth={2.2} />
          </div>

          <div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                color: "#edf2f8",
                lineHeight: 1,
              }}
            >
              {item.company}
            </div>
            <div
              style={{
                fontSize: 10,
                color: "#7b879d",
                marginTop: 5,
              }}
            >
              {item.role}
            </div>
          </div>
        </div>

        <span
          style={{
            background: badge.bg,
            color: badge.color,
            border: `1px solid ${badge.border}`,
            borderRadius: 20,
            padding: "3px 9px",
            fontSize: 9,
            fontWeight: 700,
            whiteSpace: "nowrap",
          }}
        >
          {item.status}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gap: 8,
          marginBottom: 10,
        }}
      >
        <InfoBox icon={IndianRupee} value={item.package} label="Package" />
        <InfoBox icon={CalendarDays} value={item.date} label="Drive Date" />
        <InfoBox icon={Users} value={item.eligible} label="Eligible" />
      </div>

      <button
        style={{
          width: "100%",
          height: 32,
          background: BG_INNER,
          border: `1px solid ${BORDER}`,
          borderRadius: 10,
          color: "#a8b4c3",
          fontSize: 11,
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          cursor: "pointer",
        }}
      >
        <Eye size={12} color="#7f8da3" strokeWidth={2.2} />
        View Pipeline
      </button>
    </div>
  );
}

function Section({ title, count, dotColor, items, cols = 3 }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
        <span
          style={{
            width: 7,
            height: 7,
            borderRadius: "50%",
            background: dotColor,
            display: "inline-block",
          }}
        />
        <span style={{ fontSize: 13, fontWeight: 600, color: "#edf2f8" }}>
          {title}
        </span>
        <span style={{ fontSize: 12, color: "#7b879d" }}>({count})</span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${Math.min(cols, items.length)}, 1fr)`,
          gap: 16,
        }}
      >
        {items.map((item) => (
          <DriveCard key={`${item.company}-${item.role}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function PlacementPipelineContent() {
  const [selectedFilter, setSelectedFilter] = useState("all");

  return (
    <div
      style={{
        minHeight: "100vh",
        background: BG_PAGE,
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
        color: "#fff",
        padding: "20px 24px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 22 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: BG_INNER,
            border: `1px solid ${BORDER}`,
            borderRadius: 10,
            padding: "0 12px",
            height: 36,
            width: 300,
          }}
        >
          <Search size={13} color="#7b879d" strokeWidth={2} />
          <input
            placeholder="Search company or role..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
              color: "#dbe3ed",
              fontSize: 12,
              width: "100%",
            }}
          />
        </div>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            style={{
              appearance: "none",
              background: BG_INNER,
              border: `1px solid ${BORDER}`,
              borderRadius: 10,
              padding: "0 38px 0 14px",
              height: 36,
              color: "#dbe3ed",
              fontSize: 12,
              cursor: "pointer",
              outline: "none",
              minWidth: 170,
            }}
          >
            <option value="all">All Status</option>
            <option value="upcoming">Upcoming Drives</option>
            <option value="active">Active Pipelines</option>
            <option value="completed">Completed Drives</option>
          </select>

          <div
            style={{
              position: "absolute",
              right: 12,
              pointerEvents: "none",
              display: "flex",
              alignItems: "center",
            }}
          >
            <ChevronDown size={13} color="#7f8da3" />
          </div>
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