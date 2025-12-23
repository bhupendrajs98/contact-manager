import React from "react";
import { Menu, UserRound, LogOut } from "lucide-react";

function Topbar({ toggleSidebar }) {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-slate-700 shadow flex items-center justify-between px-6 z-50">

      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-white hover:text-blue-300 transition"
        >
          <Menu size={26} />
        </button>

        <div className="leading-tight">
          <h1 className="text-xl font-bold text-white">CM</h1>
          <p className="text-xs text-gray-300">Contact Manager</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-6">
        <UserRound
          size={24}
          className="text-white hover:text-blue-300 cursor-pointer transition"
        />
        <LogOut
          size={24}
          className="text-white hover:text-red-400 cursor-pointer transition"
        />
      </div>
    </div>
  );
}

export default Topbar;
