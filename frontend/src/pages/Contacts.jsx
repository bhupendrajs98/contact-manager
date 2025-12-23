import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

export default function Contacts() {
  const { contacts, removeContact } = useContext(ContactContext);
  const navigate = useNavigate();

  // 🔥 Redirect to Edit Page
  const handleEdit = (contact) => {
    navigate(`/edit/${contact._id}`);
  };

  // Delete Contact
  const handleDelete = (id) => {
    removeContact(id);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Contacts</h1>

      <div>
        {Array.isArray(contacts) && contacts.length > 0 ? (
          contacts.map((c) => (
            <ContactCard
              key={c._id}
              contact={c}
              onEdit={() => handleEdit(c)}
              onDelete={() => handleDelete(c._id)}
            />
          ))
        ) : (
          <p>No contacts found.</p>
        )}
      </div>
    </div>
  );
}
