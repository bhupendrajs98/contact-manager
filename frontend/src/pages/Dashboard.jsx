import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const { contacts } = useContext(ContactContext);

  const totalContacts = contacts.length;
  const totalFavourites = contacts.filter((c) => c.favourite).length;

  // Show only last 4 contacts
  const recentContacts = [...contacts].slice(-4).reverse();

  return (
    <div className="p-6 space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-500 mt-1">Overview and quick insights</p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

        {/* Total Contacts */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">Total Contacts</h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">{totalContacts}</p>
        </div>

        {/* Favourites */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">Favourites</h2>
          <p className="text-4xl font-bold text-yellow-600 mt-2">
            {totalFavourites}
          </p>
        </div>

        {/* Active Users */}
        <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-700">Active Users</h2>
          <p className="text-4xl font-bold text-green-600 mt-2">
            {Math.floor(totalContacts * 0.8)}
          </p>
        </div>
      </div>


      {/* Recent Contacts Section */}
      <div className="bg-white p-6 rounded-xl shadow border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Recent Contacts</h2>
        </div>

        {recentContacts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {recentContacts.map((contact) => (
              <div
                key={contact._id}
                className="p-4 border rounded-lg bg-gray-50 hover:shadow transition"
              >
                <h3 className="text-xl font-semibold">{contact.name}</h3>
                <p className="text-gray-600">{contact.phone}</p>

                {contact.favourite && (
                  <span className="text-yellow-600 text-sm font-semibold">
                    ★ Favourite
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No recent contacts available.</p>
        )}
      </div>


      {/* Add Contact Button — bottom right */}
      <div className="flex justify-end">
        <Link
          to="/add-contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          + Add Contact
        </Link>
      </div>

    </div>
  );
}
