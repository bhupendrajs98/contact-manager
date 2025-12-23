import React, { useContext, useState } from "react";
import { ContactContext } from "../context/ContactContext";
import { useNavigate } from "react-router-dom";

export default function AddContact() {
  const { createContact } = useContext(ContactContext);
  const [contact, setContact] = useState({ name: "", phone: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!contact.name || !contact.phone) return;

    createContact(contact);
    setContact({ name: "", phone: "" });
    navigate("/"); // submit ke baad dashboard par wapas
  };

  return (
    <div className="fixed inset-0  bg-black bg-opacity-40  flex justify-center items-center p-4 z-50">

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fadeIn">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Add Contact</h1>

          {/* Close Button */}
          <button
            onClick={() => navigate("/")}
            className="text-gray-500 hover:text-gray-700 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="border p-3 rounded-lg focus:ring focus:ring-blue-300 outline-none"
          />

          <input
            type="text"
            placeholder="Phone"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            className="border p-3 rounded-lg focus:ring focus:ring-blue-300 outline-none"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Add Contact
          </button>
        </form>
      </div>
    </div>
  );
}
