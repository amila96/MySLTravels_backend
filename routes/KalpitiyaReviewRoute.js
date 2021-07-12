const express = require('express');
const KalpitiyaReviewController =  require('../controller/KalpitiyaReviewController');

const router = express.Router();

router.post('/saveReview', KalpitiyaReviewController.saveReview);
router.get('/getAllReviews', KalpitiyaReviewController.getAllReviews);

module.exports = router;
