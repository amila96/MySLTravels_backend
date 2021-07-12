const express = require('express');
const EllaReviewController =  require('../controller/EllaReviewController');

const router = express.Router();

router.post('/saveReview', EllaReviewController.saveReview);
router.get('/getAllReviews', EllaReviewController.getAllReviews);

module.exports = router;
