const express = require("express");
const router = express.Router();
const User = require("../models/User");

// CREATE USER
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// READ USERS
router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// UPDATE USER
router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });
  res.json(user);
});

// DELETE USER
router.delete("/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
});

module.exports = router;