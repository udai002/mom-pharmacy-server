const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    learnings: [
      {
        techLearnings: { type: String, required: true },
        nonTechLearnings: { type: String },
        remarks: { type: String, default: "" },
        extras: { type: String, default: "" },
        dateAdded: { type: String, default: Date.now },
        linkedinPost: { type: Boolean, default: false },
        events:{type:String},
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
