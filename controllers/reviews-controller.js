const Review = require("../models/reviews-models");

const getAllReviews = async (req, res) => {
  try {
    const reviewList = await Review.find();
    res.json(reviewList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const findReviewById = async (req, res) => {
  try {
    const id = req.params.id;
    const review = await Review.findById(id);
    res.json(review);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const findReviewByUserId = async (req, res) => {
  try {
    const id = req.params.id;
    const reviewList = await Review.find({ userDatails: { userId: id } });
    res.json(reviewList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const getUserReviews = async (req, res) => {
  try {
    const { username, id } = req.user;
    const reviewList = await Review.find({
      userDetails: { username: username, userId: id },
    });
    res.json(reviewList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

const createReview = async (req, res) => {
  try {
    const user = req.user;
    const reviewDetails = req.body;
    reviewDetails.userDetails = {
      username: user.username,
      userId: user.id,
    };
    console.log(reviewDetails);
    const reviewList = await Review.create(reviewDetails);
    res.json(reviewList);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllReviews,
  findReviewById,
  findReviewByUserId,
  getUserReviews,
  createReview,
};
