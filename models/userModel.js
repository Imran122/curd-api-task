const mongoose = require("mongoose");

// user schema
const userScheama = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
    password: {
      type: String,
      trim: true,
      required: true,
      max: 32,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("User", userScheama);
