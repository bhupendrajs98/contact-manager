const Contact = require("../model/Contact");

// ----------------------
// ADD CONTACT
// ----------------------
const addContact = async (req, res) => {
  try {
    const { name, phone, email, favourite } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ success: false, message: "Name and phone are required" });
    }

    // Create new contact
    const newContact = await Contact.create({
      name,
      phone,
      email,
      favourite: favourite || false,
    });

    res.status(201).json({
      success: true,
      message: "Contact added successfully",
      contact: newContact, // single contact object
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// ----------------------
// GET ALL CONTACTS
// ----------------------
const getAllContacts = (req, res) => {
  Contact.find()
    .sort({ name: 1 })
    .then((contacts) => {
      res.status(200).json({ success: true, contacts });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Error fetching contacts",
        error: error.message,
      });
    });
};

// ----------------------
// GET SINGLE CONTACT
// ----------------------
const getSingleContact = (req, res) => {
  Contact.findById(req.params.id)
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }
      res.status(200).json({ success: true, contact });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Error fetching contact",
        error: error.message,
      });
    });
};

// ----------------------
// UPDATE CONTACT
// ----------------------
const updateContact = (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Contact updated successfully",
        contact,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Error updating contact",
        error: error.message,
      });
    });
};

// ----------------------
// DELETE CONTACT
// ----------------------
const deleteContact = (req, res) => {
  Contact.findByIdAndDelete(req.params.id)
    .then((contact) => {
      if (!contact) {
        return res.status(404).json({
          success: false,
          message: "Contact not found",
        });
      }
      res.status(200).json({
        success: true,
        message: "Contact deleted successfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Error deleting contact",
        error: error.message,
      });
    });
};

module.exports = {
  addContact,
  getAllContacts,
  getSingleContact,
  updateContact,
  deleteContact,
};
