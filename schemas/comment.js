const mongoose = require("mongoose");

const postsSchema = new mongoose.Schema({
    user: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    unique: true
  },
  content: {
    type: String
  },
});

module.exports = mongoose.model("comments", commentsSchema);