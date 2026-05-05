const express = require("express");
const validateInput = require("./middleware/validateInput");

const app = express();
const PORT = 3000;

app.use(express.json());

// Register route
app.post("/register", validateInput, (req, res) => {
  res.status(200).json({
    success: true,
    message: "Registration successful",
    data: req.body
  });
});

// 404 fallback
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});