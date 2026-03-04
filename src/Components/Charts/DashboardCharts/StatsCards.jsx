import { Users, TrendingUp, UserCheck, Building2, Briefcase } from "lucide-react";

export default function StatsCards() {
  const stats = [
    { icon: Users, value: "342", label: "Total Students", sub: "+28 this semester" },
    { icon: TrendingUp, value: "198", label: "Active Students", sub: "Last 30 days" },
    { icon: UserCheck, value: "64", label: "Job Ready", sub: "18.7% of total" },
    { icon: Building2, value: "12", label: "Companies Hiring", sub: "5 new this month" },
    { icon: Briefcase, value: "21", label: "Students Placed", sub: "6.1% placement rate" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {stats.map((s, i) => {
        const Icon = s.icon;

        return (
          <div
            key={i}
            className="card-theme
                border border-white/10
                rounded-xl
                p-6 sm:p-5
                transition
                hover:border-emerald-500/30 "
          >
            <Icon className="text-green-400 mb-3" size={20} />

            <h2 className="text-2xl font-semibold">{s.value}</h2>
            <p className="text-gray-400 text-sm">{s.label}</p>
            <p className="text-green-400 text-xs mt-1">{s.sub}</p>
          </div>
        );
      })}
    </div>
  );
}