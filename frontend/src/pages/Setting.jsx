import React from "react";
import { useNavigate } from "react-router-dom";
import { User, Shield, Bell, LogOut, Trash2, ArrowLeft } from "lucide-react";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="p-6 mt-16 ml-20 md:ml-64 transition-all duration-300">

      {/* Header */}
      <div className="flex items-center gap-2 mb-6">
        <button
          onClick={() => navigate(-1)}
          className="text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft size={26} />
        </button>
        <h1 className="text-3xl font-bold text-gray-800">Settings</h1>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* Profile Settings */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <User className="text-blue-600" /> Profile
          </h2>

          <div className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Full Name"
              className="border p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email ID"
              className="border p-3 rounded-lg"
            />
            <button className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Save Profile
            </button>
          </div>
        </div>

        {/* Security Settings */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Shield className="text-purple-600" /> Security
          </h2>

          <div className="flex flex-col gap-3">
            <input
              type="password"
              placeholder="Current Password"
              className="border p-3 rounded-lg"
            />
            <input
              type="password"
              placeholder="New Password"
              className="border p-3 rounded-lg"
            />
            <button className="bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition">
              Update Password
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Bell className="text-orange-600" /> Notifications
          </h2>

          <div className="flex flex-col gap-4">
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="h-4 w-4" /> Email Notifications
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="h-4 w-4" /> SMS Alerts
            </label>
            <label className="flex items-center gap-2 text-gray-700">
              <input type="checkbox" className="h-4 w-4" /> App Notifications
            </label>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-red-300">
          <h2 className="text-xl font-semibold text-red-600 mb-4 flex items-center gap-2">
            <Trash2 className="text-red-600" /> Danger Zone
          </h2>

          <button
            className="bg-red-600 w-full text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Delete Account
          </button>

          <button
            className="mt-3 bg-gray-800 w-full text-white py-2 rounded-lg hover:bg-black transition flex items-center justify-center gap-2"
          >
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </div>
  );
}
