const API = "http://localhost:8173/api/contacts";

const getAllContacts = async () => {
  const res = await fetch(API);
  return res.json();
};

const getSingleContact = async (id) => {
  const res = await fetch(`${API}/${id}`);
  return res.json();
};

const addContact = async (data) => {
  const res = await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

const updateContact = async (id, data) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

const deleteContact = async (id) => {
  const res = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
  return res.json();
};

// ✔ SINGLE EXPORT LINE (NO DUPLICATE)
export {
  getAllContacts,
  getSingleContact,
  addContact,
  updateContact,
  deleteContact
};
