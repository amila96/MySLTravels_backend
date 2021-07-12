const express = require('express');
const HikkaduwaReviewController =  require('../controller/HikkaduwaReviewController');

const router = express.Router();

router.post('/saveReview', HikkaduwaReviewController.saveReview);
router.get('/getAllReviews', HikkaduwaReviewController.getAllReviews);

module.exports = router;
