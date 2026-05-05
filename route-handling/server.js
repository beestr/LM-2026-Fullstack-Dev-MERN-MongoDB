const express = require("express");
const app = express();
const PORT = 3000;

// Middleware logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Home route - text response
app.get("/", (req, res) => {
  res.send("Welcome to Route Handling!");
});

// About route - HTML response
app.get("/about", (req, res) => {
  res.send("<h1>About Us</h1>");
});

// JSON response route
app.get("/api", (req, res) => {
  res.json({
    message: "This is JSON response",
    status: "success"
  });
});

// Dynamic route parameter
app.get("/products/:id", (req, res) => {
  const productId = req.params.id;
  res.send(`Viewing Product ID: ${productId}`);
});

// Query string route
app.get("/search", (req, res) => {
  const term = req.query.q;
  res.send(`Searching for: ${term}`);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});