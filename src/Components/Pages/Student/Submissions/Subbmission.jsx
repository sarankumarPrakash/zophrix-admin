import { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Layers,
  Check,
  X,
  Timer,
  ExternalLink,
} from "lucide-react";

export default function Submissions() {
  const [filter, setFilter] = useState("all");

  const submissions = [
  {
    id: "ZPX-001",
    title: "Build a Todo App with React",
    status: "merged",
    tests: "12/12",
    date: "2026-02-10, 14:32",
    iterations: 1,
    feedback:
      "All validations passed. Consider improving edge-case coverage.",
  },
  {
    id: "ZPX-002",
    title: "Build a REST Auth API",
    status: "review",
    tests: "14/18",
    date: "2026-02-09, 18:05",
    iterations: 3,
    feedback: "Critical authentication tests failing.",
    changes: [
      "Make token expiry configurable",
      "Add rate limiting",
      "Use bcrypt salt rounds >= 10",
      "Return proper 401 for expired tokens",
    ],
  },
  {
    id: "ZPX-003",
    title: "URL Shortener Service",
    status: "failed",
    tests: "6/12",
    date: "2026-02-08, 11:20",
    iterations: 2,
    feedback: "Redirection logic failing.",
  },
  {
    id: "ZPX-004",
    title: "Kanban Board",
    status: "open",
    tests: "0/14",
    date: "2026-02-07, 09:15",
    iterations: 0,
    feedback: "",
  },
  {
    id: "ZPX-005",
    title: "GraphQL Blog API",
    status: "merged",
    tests: "16/16",
    date: "2026-02-06, 17:40",
    iterations: 2,
    feedback:
      "Schema design is clean. Improve resolver-level error handling.",
  },
  {
    id: "ZPX-006",
    title: "E-commerce Cart System",
    status: "review",
    tests: "11/15",
    date: "2026-02-05, 13:22",
    iterations: 2,
    feedback: "Checkout flow failing under edge cases.",
    changes: [
      "Validate stock before checkout",
      "Handle coupon expiry properly",
      "Add integration tests for cart updates",
    ],
  },
  {
    id: "ZPX-007",
    title: "Real-time Chat Application",
    status: "merged",
    tests: "18/18",
    date: "2026-02-04, 10:55",
    iterations: 1,
    feedback:
      "WebSocket handling is solid. Good separation of concerns.",
  },
  {
    id: "ZPX-008",
    title: "Markdown Previewer",
    status: "failed",
    tests: "5/10",
    date: "2026-02-03, 16:18",
    iterations: 1,
    feedback: "Parsing logic breaks on nested markdown elements.",
  },
  {
    id: "ZPX-009",
    title: "OAuth2 Integration",
    status: "review",
    tests: "9/14",
    date: "2026-02-02, 12:30",
    iterations: 4,
    feedback: "Token refresh flow incomplete.",
    changes: [
      "Implement refresh token rotation",
      "Store tokens securely",
      "Handle provider error responses properly",
    ],
  },
  {
    id: "ZPX-010",
    title: "File Upload Microservice",
    status: "merged",
    tests: "13/13",
    date: "2026-02-01, 09:45",
    iterations: 1,
    feedback:
      "Validation and size checks handled correctly. Good logging.",
  },
];

  // 🔥 Correct Stats
  const stats = {
    total: submissions.length,
    open: submissions.filter(
      (s) => s.status === "open" || s.status === "review"
    ).length,
    merged: submissions.filter((s) => s.status === "merged").length,
    failed: submissions.filter((s) => s.status === "failed").length,
  };

  const successRate =
    stats.total === 0
      ? 0
      : Math.round((stats.merged / stats.total) * 100);

  // 🔥 Filtering Logic
  const filteredSubmissions = submissions.filter((item) => {
    if (filter === "all") return true;
    if (filter === "open")
      return item.status === "open" || item.status === "review";
    if (filter === "merged") return item.status === "merged";
    if (filter === "failed") return item.status === "failed";
    if (filter === "review") return item.status === "review";
    return true;
  });

  return (
    <div className="p-8 text-gray-200 bg-theme min-h-screen">
      <h1 className="text-2xl font-semibold mb-2">Pull Request History</h1>
      <p className="text-gray-400 mb-6">
        Track your engineering revisions and validation cycles
      </p>

      {/* 🔥 TOP STATS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Layers size={18} />} label="Open PRs" value={stats.open} />
        <StatCard
          icon={<Check size={18} />}
          label="Merged PRs"
          value={stats.merged}
          color="green"
        />
        <StatCard
          icon={<Timer size={18} />}
          label="Validation Success Rate"
          value={`${successRate}%`}
          color="green"
        />
        <StatCard
          icon={<X size={18} />}
          label="Failed PRs"
          value={stats.failed}
          color="red"
        />
      </div>

      {/* 🔥 FILTER TABS */}
      <div className="flex gap-3 mb-6">
        {["all", "open", "review", "merged", "failed"].map((tab) => (
          <button
            key={tab}
            onClick={() => setFilter(tab)}
            className={`px-4 py-2 rounded-lg text-sm capitalize ${
              filter === tab
                ? "bg-green-500 text-black"
                : "border border-[#393434] hover:border-white/20"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {filteredSubmissions.map((item) => (
          <SubmissionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

/* ============================================= */

function SubmissionItem({ item }) {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const testsPassed = parseInt(item.tests.split("/")[0]);
  const testsTotal = parseInt(item.tests.split("/")[1]);
  const percent =
    testsTotal === 0 ? 0 : Math.round((testsPassed / testsTotal) * 100);

  const statusMap = {
    merged: {
      label: "Merged",
      style: "bg-green-500/10 text-green-400",
      icon: <CheckCircle2 size={16} />,
    },
    failed: {
      label: "Validation Failed",
      style: "bg-red-500/10 text-red-400",
      icon: <XCircle size={16} />,
    },
    open: {
      label: "Awaiting Validation",
      style: "bg-yellow-500/10 text-yellow-400",
      icon: <Clock size={16} />,
    },
    review: {
      label: "Review Requested",
      style: "bg-amber-500/10 text-amber-400",
      icon: <AlertTriangle size={16} />,
    },
  };

  const progressColor =
    item.status === "merged"
      ? "bg-green-500"
      : item.status === "failed"
      ? "bg-red-500"
      : item.status === "review"
      ? "bg-amber-500"
      : "bg-yellow-500";

  return (
    <div className="card-theme border border-[#393434] rounded-xl overflow-hidden">
      {/* HEADER */}
      <div
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div className="flex items-center gap-4">
          <span
            className={`px-3 py-1 text-xs rounded-full flex items-center gap-1 ${statusMap[item.status].style}`}
          >
            {statusMap[item.status].icon}
            {statusMap[item.status].label}
          </span>

          <div>
            <p className="font-medium">{item.title}</p>
            <p className="text-xs text-gray-500">
              {item.tests} passing • {item.iterations} revisions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-sm text-gray-400">
          <span>{item.date}</span>
          {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </div>

      {/* BODY */}
      {open && (
        <div className="px-5 pb-5 border-t border-[#393434]">
          {/* Progress */}
          <div className="mt-4">
            <p className="text-xs text-gray-400 mb-1">
              Validation Progress ({testsPassed}/{testsTotal})
            </p>
            <div className="h-2 bg-gray-800 rounded">
              <div
                className={`h-2 ${progressColor} rounded`}
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>

          {/* Feedback */}
          {item.feedback && (
            <div className="bg-[#111827] border border-[#2a2a2a] rounded-lg p-4 mt-4">
              <p className="text-sm font-medium mb-1">System Feedback</p>
              <p className="text-gray-400 text-sm">{item.feedback}</p>
            </div>
          )}

          {/* Changes */}
          {item.changes && (
            <div className="bg-amber-500/5 border border-amber-500/30 rounded-lg p-4 mt-4">
              <p className="text-amber-400 font-medium mb-2">
                Required Revisions
              </p>
              <ul className="list-disc ml-5 text-sm space-y-1">
                {item.changes.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          )}

          {/* ACTIONS */}
          {(item.status === "failed" || item.status === "review") && (
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => setShowModal(true)}
                className="bg-green-500 hover:bg-green-600 text-black px-4 py-2 rounded-lg flex items-center gap-2 text-sm"
              >
                <RotateCcw size={16} /> Push New Revision
              </button>
            </div>
          )}
        </div>
      )}

      {showModal && (
        <ResubmitModal item={item} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
}

/* ============================================= */

function StatCard({ icon, label, value, color }) {
  const colorStyles = {
    green: "text-green-400",
    red: "text-red-400",
  };

  return (
    <div className="card-theme border border-[#393434] rounded-xl p-5">
      <div className={`mb-3 ${colorStyles[color] || "text-gray-400"}`}>
        {icon}
      </div>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
}

/* ============================================= */

function ResubmitModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="card-theme w-full max-w-xl rounded-xl border border-[#393434] p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X size={18} />
        </button>

        <h2 className="text-lg font-semibold mb-1">
          Push Revision — {item.id}
        </h2>

        <p className="text-gray-400 text-sm mb-5">
          Update your branch and push changes to trigger validation.
        </p>

        <div className="bg-[#020617] rounded-lg p-4 font-mono text-sm space-y-2 mb-5">
          <p>$ git checkout -b revision/{item.id.toLowerCase()}</p>
          <p>$ git commit -m "fix review feedback"</p>
          <p>$ git push origin revision/{item.id.toLowerCase()}</p>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-[#393434] rounded-lg"
          >
            Close
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-black px-5 py-2 rounded-lg font-medium">
            Open Repository
          </button>
        </div>
      </div>
    </div>
  );
}