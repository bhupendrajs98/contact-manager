import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Users,
  Star,
  Settings,
  Trash2,
  LogOut
} from "lucide-react";

function Sidebar({ isOpen }) {
  return (
    <div
      className={`
        fixed top-16 left-0 h-[calc(100%-4rem)] bg-slate-900 text-white z-40
        transition-all duration-300 flex flex-col
        ${isOpen ? "w-64" : "w-20"}
      `}
    >
      <nav className="px-3 py-4 flex-1">
        <ul className="space-y-2 text-sm">

          <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" path="/" open={isOpen} />
          <SidebarItem icon={<Users size={20} />} label="Contacts" path="/contacts" open={isOpen} />
          <SidebarItem icon={<Star size={20} />} label="Favourite" path="/favourite" open={isOpen} />
          <SidebarItem icon={<Settings size={20} />} label="Settings" path="/settings" open={isOpen} />
          <SidebarItem icon={<Trash2 size={20} />} label="Deleted Contacts" path="/deleted" open={isOpen} />

        </ul>
      </nav>

      <div className="border-t border-gray-700 px-3 py-4">
        <SidebarItem icon={<LogOut size={20} />} label="Logout" path="/logout" open={isOpen} red />
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, open, red, path }) {
  return (
    <li>
      <Link
        to={path}
        className={`
          flex items-center p-3 rounded-lg cursor-pointer group
          hover:bg-gray-700 transition
          ${red ? "hover:text-red-500" : "hover:text-white"}
        `}
      >
        <div className="w-6 h-6 flex justify-center items-center">
          {icon}
        </div>

        <span
          className={`
            ml-3 whitespace-nowrap overflow-hidden transition-all duration-300
            ${open ? "opacity-100 max-w-[180px]" : "opacity-0 max-w-0"}
          `}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}

export default Sidebar;
