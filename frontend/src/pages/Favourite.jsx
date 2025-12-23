import React, { useContext } from "react";
import { ContactContext } from "../context/ContactContext";
import ContactCard from "./ContactCard";
import { useNavigate } from "react-router-dom";

export default function Favourite() {
  const { contacts, removeContact } = useContext(ContactContext);
  const navigate = useNavigate();

  // Filter favourites only
  const favouriteContacts = contacts.filter((c) => c.favourite === true);

  // Edit handle
  const handleEdit = (contact) => {
    navigate(`/edit/${contact._id}`);
  };

  // Delete Contact
  const handleDelete = (id) => {
    removeContact(id);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Favourite Contacts ❤️</h1>

      {favouriteContacts.length > 0 ? (
        favouriteContacts.map((c) => (
          <ContactCard
            key={c._id}
            contact={c}
            onEdit={() => handleEdit(c)}
            onDelete={() => handleDelete(c._id)}
          />
        ))
      ) : (
        <p className="text-gray-600 text-lg">No favourite contacts found.</p>
      )}
    </div>
  );
}
