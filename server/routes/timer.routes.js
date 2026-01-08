import express from "express";
import {
  createTimer,
  getAllTimers,
  getTimerById,
  updateTimer,
  deleteTimer,
} from "../controllers/timer.controller.js";

const router = express.Router();

router.post("/", createTimer);

router.get("/", getAllTimers);

router.get("/:id", getTimerById);

router.put("/:id", updateTimer);

router.delete("/:id", deleteTimer);

export default router;
