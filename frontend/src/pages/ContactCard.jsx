import React from "react";

export default function ContactCard({ contact, onEdit, onDelete }) {
  return (
    <div className="flex items-center justify-between p-4 mb-3 rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      
      {/* LEFT SIDE */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800">
          {contact.name}
        </h2>

        <p className="text-gray-600">{contact.phone}</p>

        {contact.favourite && (
          <span className="inline-block mt-1 px-2 py-0.5 rounded-md text-sm font-medium bg-yellow-100 text-yellow-600">
            ★ Favourite
          </span>
        )}
      </div>

      {/* RIGHT SIDE BUTTON GROUP */}
      <div className="flex gap-3">
        <button
          onClick={() => onEdit(contact)}
          className="px-4 py-1.5 rounded-lg bg-green-600 text-white hover:bg-green-700 transition-colors duration-150"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(contact._id)}
          className="px-4 py-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors duration-150"
        >
          Delete
        </button>
      </div>

    </div>
  );
}
