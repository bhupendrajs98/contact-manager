import { createContext, useEffect, useState } from "react";
import {
  getAllContacts,
  getSingleContact,
  addContact,
  updateContact,
  deleteContact,
} from "../services/contactApi";

export const ContactContext = createContext();

export default function ContactProvider({ children }) {
  const [contacts, setContacts] = useState([]);

  // LOAD ALL CONTACTS
  const loadContacts = async () => {
    const data = await getAllContacts();
    const contactsArray = Array.isArray(data) ? data : data.contacts || [];
    setContacts(contactsArray);
  };

  // CREATE NEW CONTACT
  const createContact = async (contactData) => {
    const newContact = await addContact(contactData);
    setContacts((prev) => [...prev, newContact]);
  };

  // UPDATE CONTACT
  const editContact = async (id, updatedData) => {
    const updatedContact = await updateContact(id, updatedData);
    setContacts((prev) =>
      prev.map((c) => (c._id === id ? updatedContact : c))
    );
  };

  // DELETE CONTACT
  const removeContact = async (id) => {
    await deleteContact(id);
    setContacts((prev) => prev.filter((c) => c._id !== id));
  };

  // GET SINGLE CONTACT
  const getContact = async (id) => {
    const contact = await getSingleContact(id);
    return contact;
  };

  useEffect(() => {
    loadContacts();
  }, []);

  return (
    <ContactContext.Provider
      value={{
        contacts,
        createContact,
        editContact,
        removeContact,
        getContact,
        loadContacts,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
}
