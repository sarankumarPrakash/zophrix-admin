import { CheckCircle, Code2, GitBranch, Trophy } from "lucide-react";

export default function Headercard() {
  const stats = [
    {
      icon: CheckCircle,
      value: "12",
      label: "Challenges Completed",
      sub: "3 this month",
    },
    {
      icon: Code2,
      value: "8",
      label: "Tasks Approved",
      sub: "+2 approved this week",
    },
    {
      icon: GitBranch,
      value: "64%",
      label: "First Attempt Pass Rate",
      sub: "Across all completed tasks",
    },
    {
      icon: Trophy,
      value: "7",
      label: "Verified Skills",
      sub: "Advanced in 3 domains",
    }
  ];

  return (
    <div className="space-y-6">

      {/* Welcome Text */}
      <div>
        <h1 className="text-xl sm:text-2xl font-semibold text-white">
          Welcome back, <span className="text-emerald-500">Arjun</span>
        </h1>

        <p className="text-gray-400 text-sm mt-1">
          You have 1 active challenge. Keep shipping. 🚀
        </p>
      </div>

      {/* Stats Grid */}
      <div
        className="
          grid gap-4
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {stats.map((item, i) => {
          const Icon = item.icon;

          return (
            <div
              key={i}
              className="
                card-theme
                border border-white/10
                rounded-xl
                p-4 sm:p-5
                transition
                hover:border-emerald-500/30
              "
            >
              {/* Icon */}
              <Icon size={20} className="text-emerald-500 mb-3" />

              {/* Value */}
              <div className="text-xl sm:text-2xl font-semibold text-white">
                {item.value}
              </div>

              {/* Label */}
              <div className="text-xs text-gray-400 mt-1">
                {item.label}
              </div>

              {/* Sub text */}
              <div className="text-xs text-emerald-500 mt-2">
                {item.sub}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}