const mongoose = require("mongoose");
const reviewSchema = mongoose.Schema({
  userDetails: {
    type: Object,
    required: true,
    username: {
      type: String,
      required: true,
      trim: true,
    },
    userId: {
      type: String,
      required: true,
      trim: true,
    },
  },
  content: {
    type: String,
    required: true,
    trim: true,
  },
});

const Review = mongoose.model("reviews", reviewSchema);
module.exports = Review;
