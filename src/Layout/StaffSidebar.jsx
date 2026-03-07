import React from "react";
import {Code2,LayoutDashboard,GitPullRequest,LogOut,MonitorSpeaker ,Paperclip,SlidersHorizontal ,BookUser  } from "lucide-react";
import { NavLink as RouterNavLink, useLocation } from "react-router-dom";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", to: "/hub" },
  { icon: BookUser, label: "Students", to: "/students" },
  { icon: GitPullRequest, label: "Placement pipeline ", to: "/submissions" },
  { icon: MonitorSpeaker, label: "Companies", to: "/Skillbadges" },
  { icon: Paperclip, label: "Report", to: "/hackathons" },
];

const bottomItems = [
  { icon: SlidersHorizontal, label: "Settings" },
  { icon: LogOut, label: "Logout" },
];

const StaffSidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-screen w-16 flex-col border-r border-[#393434] bg-theme lg:w-56">
      
      {/* Logo */}
      <div className="flex h-14 items-center gap-2.5 border-b border-[#393434] px-4">
        <Code2 className="h-6 w-6 text-green-400 shrink-0" />
        <span className="hidden font-mono text-sm font-bold text-white lg:block tracking-wider">
          ZOPHRIX
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-2 py-4 space-y-1">
        {navItems.map((item) => {
          const isActive =
            item.to === "/"
              ? location.pathname === "/"
              : location.pathname.startsWith(item.to);

          return (
            <RouterNavLink
              key={item.label}
              to={item.to}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors
              ${
                isActive
                  ? "bg-gradient-to-r from-green-900/40 to-green-700/30 text-green-400 font-semibold"
                  : "text-slate-400 hover:bg-text-theme hover:text-white"
              }`}
            >
              <item.icon className="h-4 w-4 shrink-0" />
              <span className="hidden lg:block">{item.label}</span>

              {item.badge && (
                <span className="ml-auto hidden rounded-full bg-amber-500/20 px-2 py-0.5 text-[10px] font-medium text-amber-400 lg:block">
                  {item.badge}
                </span>
              )}
            </RouterNavLink>
          );
        })}
      </nav>

      {/* Bottom Buttons */}
      <div className="border-t border-[#393434] px-2 py-3 space-y-1">
        {bottomItems.map((item) => (
          <button
            key={item.label}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-[#04121f] hover:text-white transition-colors"
          >
            <item.icon className="h-4 w-4 shrink-0" />
            <span className="hidden lg:block">{item.label}</span>
          </button>
        ))}
      </div>

      {/* User */}
      <div className="border-t border-[#393434] p-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-xs font-bold text-green-400 font-mono">
            AK
          </div>

          <div className="hidden lg:block min-w-0">
            <p className="text-xs font-medium text-white truncate">
              Arjun Kumar
            </p>
            <p className="text-[10px] text-slate-400 truncate">
              arjun@zophrix.dev
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default StaffSidebar;