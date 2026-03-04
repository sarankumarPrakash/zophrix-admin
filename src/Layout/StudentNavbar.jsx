import React from "react";
import { Bell, Search } from "lucide-react";

const StudentNavbar = () => {
  return (
    <header className="sticky top-0 z-20 flex h-14 items-center justify-between border-b border-border border-[#393434] backdrop-blur-md px-6">
      
      {/* left spacer (keeps alignment with sidebar layout) */}
      <div />

      {/* right controls */}
      <div className="flex items-center gap-3">

        {/* Search */}
        <div className="flex items-center gap-2 rounded-md  bg-gray-700  bg-surface px-3 py-1.5">
          <Search className="h-3.5 w-3.5 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search..."
            className="w-40  text-xs bg-transparent text-foreground placeholder:text-muted-foreground focus:outline-none"
          />

          <kbd className="rounded bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
          
          </kbd>
        </div>

        {/* Notifications */}
        <button className="relative rounded-md p-2 text-muted-foreground hover:bg-surface hover:text-foreground transition-colors">
          <Bell className="h-4 w-4" />
          <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
        </button>

      </div>
    </header>
  );
};

export default StudentNavbar;