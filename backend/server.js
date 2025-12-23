const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDb = require("./config/db");

const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 8000;

// ----------------------
// CONNECT DATABASE
// ----------------------
connectDb();

// ----------------------
// MIDDLEWARES
// ----------------------
app.use(cors());
app.use(express.json());

// ----------------------
// ROUTES
// ----------------------
app.use("/api/contacts", contactRoutes);

// ----------------------
// DEFAULT ROUTE
// ----------------------
app.get("/", (req, res) => {
  res.send("Contact Manager API is running...");
});

// ----------------------
// START SERVER
// ----------------------
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
