const express = require("express");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

// JSON parsing
app.use(express.json());

// Success route
app.get("/success", (req, res) => {
  res.json({
    success: true,
    message: "Request successful"
  });
});

// Error route
app.get("/error", (req, res, next) => {
  const error = new Error("Something went wrong");
  error.statusCode = 500;
  next(error);
});

// Validation error route
app.get("/validation-error", (req, res, next) => {
  const error = new Error("Validation failed");
  error.statusCode = 400;
  next(error);
});

// 404 fallback
app.use((req, res, next) => {
  const error = new Error("Page Not Found");
  error.statusCode = 404;
  next(error);
});

// Error middleware (must be after routes)
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});