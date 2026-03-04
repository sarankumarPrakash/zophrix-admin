import { Award  } from "lucide-react";

export default function SkillBadges() {
  const skills = [
    {
      name: "REST API Design",
      level: "Advanced",
      completed: "3 challenges completed",
      date: "Jan 2026",
    },
    {
      name: "React Components",
      level: "Intermediate",
      completed: "2 challenges completed",
      date: "Dec 2025",
    },
    {
      name: "Database Design",
      level: "Advanced",
      completed: "2 challenges completed",
      date: "Nov 2025",
    },
    {
      name: "Authentication",
      level: "Advanced",
      completed: "3 challenges completed",
      date: "Oct 2025",
    },
    {
      name: "Testing (Jest)",
      level: "Intermediate",
      completed: "1 challenge completed",
      date: "Sep 2025",
    },
    {
      name: "Frontend Tooling",
      level: "Beginner",
      completed: "1 challenge completed",
      date: "Aug 2025",
    },
    {
      name: "WebSockets",
      level: "Intermediate",
      completed: "1 challenge completed",
      date: "Jul 2025",
    },
  ];

  return (
    <div className="p-8 text-gray-200 bg-theme min-h-screen">
      
      {/* Header */}
      <h1 className="text-2xl font-semibold mb-2">Verified Skills</h1>
      <p className="text-gray-400 mb-8">
        Skills verified through completed challenges
      </p>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}


function SkillCard({ skill }) {
  const badgeStyles = {
    Advanced: "bg-green-500/10 text-green-400 border-green-500/30",
    Intermediate: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    Beginner: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  };

  return (
    <div className="card-theme border border-[#393434] rounded-xl p-6 hover:border-white/20 transition">
      
      {/* Top Row */}
      <div className="flex justify-between items-start mb-6">
        <Award className="text-green-400" size={22} />

        <span
          className={`text-xs px-3 py-1 rounded-full border ${badgeStyles[skill.level]}`}
        >
          {skill.level}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold mb-1">{skill.name}</h3>

      {/* Meta */}
      <p className="text-gray-400 text-sm">
        {skill.completed} · {skill.date}
      </p>
    </div>
  );
}