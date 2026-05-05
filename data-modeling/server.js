const express = require("express");
const dotenv = require("dotenv");

const connectDB = require("./config/db");
const demoRoutes = require("./routes/demo.route");

dotenv.config();

const app = express();

// middleware
app.use(express.json());

// connect database
connectDB();

// routes
app.use("/api", demoRoutes);

// server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});