import CountdownTimer from "../models/CountdownTimer.js";

export const createTimer = async (req, res) => {
  try {
    const timer = await CountdownTimer.create(req.body);
    res.status(201).json(timer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getAllTimers = async (req, res) => {
  try {
    const timers = await CountdownTimer.find().sort({ createdAt: -1 });
    res.json(timers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getTimerById = async (req, res) => {
  try {
    const timer = await CountdownTimer.findById(req.params.id);
    if (!timer) {
      return res.status(404).json({ message: "Timer not found" });
    }
    res.json(timer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateTimer = async (req, res) => {
  try {
    const timer = await CountdownTimer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!timer) {
      return res.status(404).json({ message: "Timer not found" });
    }

    res.json(timer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteTimer = async (req, res) => {
  try {
    const timer = await CountdownTimer.findByIdAndDelete(req.params.id);

    if (!timer) {
      return res.status(404).json({ message: "Timer not found" });
    }

    res.json({ message: "Timer deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
