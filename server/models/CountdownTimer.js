import mongoose from "mongoose";

const CountdownTimerSchema = new mongoose.Schema(
  {
    timerName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    startDateTime: {
      type: Date,
      required: true,
    },

    endDateTime: {
      type: Date,
      required: true,
    },

    promotionDescription: {
      type: String,
      trim: true,
      maxlength: 500,
    },

    timerColor: {
      type: String,
      default: "#00FF00",
    },

    timerSize: {
      type: String,
      enum: ["Small", "Medium", "Large"],
      default: "Medium",
    },

    timerPosition: {
      type: String,
      enum: ["Top", "Bottom", "Inline"],
      default: "Top",
    },

    urgencyNotification: {
      type: String,
      enum: ["Color pulse", "Blink", "Shake", "None"],
      default: "Color pulse",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("CountdownTimer", CountdownTimerSchema);
