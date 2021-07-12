const express = require('express');
const NuwarEliyaReviewController =  require('../controller/NuwaraEliyaReviewController');

const router = express.Router();

router.post('/saveReview', NuwarEliyaReviewController.saveReview);
router.get('/getAllReviews', NuwarEliyaReviewController.getAllReviews);

module.exports = router;
