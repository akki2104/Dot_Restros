const router = require("express").Router();
const {
  getAllReviews,
  findReviewById,
  findReviewByUserId,
  getUserReviews,
  createReview,
} = require("../controllers/reviews-controller");

router.get("/all", getAllReviews);

router.get("/review-id/:id", findReviewById);

router.get("/user-id/:id", findReviewByUserId);

router.get("/my", getUserReviews);

router.post("/create", createReview);

module.exports = router;
