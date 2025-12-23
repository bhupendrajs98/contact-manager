const express = require("express");
const router = express.Router();

const {
  addContact,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controller/contactController");

// Add contact
router.post("/", addContact);

// Get all contacts
router.get("/", getAllContacts);

// Get single contact
router.get("/:id", getSingleContact);

// Update contact
router.put("/:id", updateContact);

// Delete contact
router.delete("/:id", deleteContact);

module.exports = router;
