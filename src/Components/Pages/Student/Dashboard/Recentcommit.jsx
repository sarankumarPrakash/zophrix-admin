import React from "react";

const commits = [
  {
    type: "commit",
    msg: "feat: add user auth module with JWT",
    hash: "a3f8c21",
    repo: "challenge/auth-api",
    time: "2h ago",
    statusColor: "bg-emerald-500",
    badgeColor: "bg-emerald-500/10 text-emerald-400",
  },
  {
    type: "commit",
    msg: "fix: resolve CORS middleware config",
    hash: "b7e2d09",
    repo: "challenge/auth-api",
    time: "5h ago",
    statusColor: "bg-emerald-500",
    badgeColor: "bg-emerald-500/10 text-emerald-400",
  },
  {
    type: "test failed",
    msg: "test: add integration tests for /login",
    hash: "c1a4f88",
    repo: "challenge/auth-api",
    time: "8h ago",
    statusColor: "bg-red-500",
    badgeColor: "bg-red-500/10 text-red-400",
  },
  {
    type: "refactor",
    msg: "refactor: extract db helper functions",
    hash: "d9b3e47",
    repo: "challenge/todo-app",
    time: "1d ago",
    statusColor: "bg-yellow-500",
    badgeColor: "bg-yellow-500/10 text-yellow-400",
  },
  {
    type: "feature",
    msg: "feat: implement CRUD endpoints",
    hash: "e5c7a12",
    repo: "challenge/todo-app",
    time: "1d ago",
    statusColor: "bg-blue-500",
    badgeColor: "bg-blue-500/10 text-blue-400",
  },
];

export default function Recentcommit() {
  return (
    <div className="bg-[#0b1117] border border-white/10 rounded-xl p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold">Engineering Activity</h2>
        <span className="text-xs text-gray-400">Last 48 hours</span>
      </div>

      <div className="space-y-5">
        {commits.map((c, i) => (
          <div
            key={i}
            className="flex gap-3 group hover:bg-white/5 p-2 rounded-lg transition"
          >
            {/* timeline */}
            <div className="flex flex-col items-center">
              <span
                className={`w-2.5 h-2.5 rounded-full ${c.statusColor}`}
              />
              {i !== commits.length - 1 && (
                <span className="flex-1 w-[2px] bg-white/10 mt-1" />
              )}
            </div>

            {/* content */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${c.badgeColor}`}
                >
                  {c.type.toUpperCase()}
                </span>
                <p className="text-sm">{c.msg}</p>
              </div>

              <div className="text-xs text-gray-400 mt-1 flex gap-3">
                <span className="text-emerald-400 font-mono">
                  {c.hash}
                </span>
                <span>{c.repo}</span>
                <span>{c.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-white/10 text-xs text-emerald-400 cursor-pointer hover:underline">
        View All Activity →
      </div>
    </div>
  );
}