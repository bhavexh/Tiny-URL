import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
  created: {
    type: Date,
    required: true,
    default: Date.now,
  },
  lastClicked: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
