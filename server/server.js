import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import timerRoutes from "./routes/timer.routes.js";

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/timers", timerRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("Countdown Timer API is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
