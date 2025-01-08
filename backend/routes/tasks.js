import express from "express";
import jwt from "jsonwebtoken";
import Task from "../models/Task.js";

const router = express.Router();

// Middleware for token verification
const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ error: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(401).json({ error: "Invalid token" });
    req.userId = user.id;
    next();
  });
};

// Create Task
router.post("/", verifyToken, async (req, res) => {
  const { name, description, date, pinned } = req.body;
  try {
    const newTask = new Task({
      userId: req.userId,
      name,
      description,
      date,
      pinned
    });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Error creating task" });
  }
});

// Get All Tasks
router.get("/", verifyToken, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: "Error fetching tasks" });
  }
});

// Update Task
router.put("/:id", verifyToken, async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ error: "Error updating task" });
  }
});

// Delete Task
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting task" });
  }
});

export default router;
