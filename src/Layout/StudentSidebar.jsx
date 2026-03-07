import React from "react";
import { NavLink } from "react-router-dom";
import {
  Code2,
  LayoutDashboard,
  Users,
  FlaskConical,
  GitPullRequest,
  Trophy,
  Zap,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, to: "/hub" },
  { icon: Users, to: "/students" },
  { icon: FlaskConical, to: "/challenges" },
  { icon: GitPullRequest, to: "/submissions" },
  { icon: Trophy, to: "/skillbadges" },
  { icon: Zap, to: "/hackathons" },
];

const StudentSidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-16 border-r border-[#1A2233] bg-[#070D1A]">
      {/* Top logo */}
      <div className="flex h-14 items-center justify-center border-b border-[#1A2233]">
        <Code2 className="h-5 w-5 text-[#22C55E]" strokeWidth={2.2} />
      </div>

      {/* Icon nav */}
      <nav className="flex flex-col items-center gap-4 py-6">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={index}
              to={item.to}
              className={({ isActive }) =>
                `flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-[#12361F] text-[#22C55E]"
                    : "text-[#98A2B3] hover:bg-[#0E1626] hover:text-white"
                }`
              }
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default StudentSidebar;