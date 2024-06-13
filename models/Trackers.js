import mongoose from "mongoose";

const trackerSchema = new mongoose.Schema({
  amount: { type: Number, required: true },
  eventCome: { type: String, required: true },
  devise: { type: Number, required: true },
  desc: { type: String, required: true },
  userId: { type: String, required: true },
});

const Tracker =
  mongoose.models.Tracker || mongoose.model("Tracker", trackerSchema);
export default Tracker;
