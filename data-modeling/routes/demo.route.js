const express = require("express");
const router = express.Router();

const User = require("../models/user.model");
const Task = require("../models/task.model");

// Create sample user + task
router.post("/create", async (req, res) => {
  try {
    const user = await User.create({
      name: "John Doe",
      email: "john@example.com"
    });

    const task = await Task.create({
      title: "Learn MongoDB",
      description: "Practice Mongoose schema",
      userId: user._id
    });

    res.status(201).json({
      success: true,
      user,
      task
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
});

// Fetch tasks + populate user
router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find().populate("userId");

    res.json({
      success: true,
      data: tasks
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router;