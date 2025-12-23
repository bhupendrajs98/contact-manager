import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ContactContext } from "../context/ContactContext";

export default function EditContact() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { contacts, editContact } = useContext(ContactContext);

  // Find selected contact
  const existingContact = contacts.find((c) => c._id === id);

  const [contact, setContact] = useState({
    name: "",
    phone: "",
    favourite: false,
  });

  useEffect(() => {
    if (existingContact) {
      setContact({
        name: existingContact.name,
        phone: existingContact.phone,
        favourite: existingContact.favourite,
      });
    }
  }, [existingContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    editContact(id, contact);
    navigate("/");
  };

  if (!existingContact) {
    return (
      <div className="p-6 text-red-600 text-xl">
        Contact not found...
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center p-4 z-50">

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 animate-fadeIn">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">Edit Contact</h1>

          <button
            onClick={() => navigate("/dashboard")}
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

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={contact.favourite}
              onChange={(e) =>
                setContact({ ...contact, favourite: e.target.checked })
              }
            />
            Favourite
          </label>

          <button
            type="submit"
            className="bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
