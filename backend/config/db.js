// config/db.js
const mongoose = require("mongoose");

const connectDb = () => {
  mongoose.connect(process.env.CONNECTION_STRING)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => {
      console.error("MongoDB Connection Error:", err.message);
      process.exit(1);
    });
};

module.exports = connectDb;
