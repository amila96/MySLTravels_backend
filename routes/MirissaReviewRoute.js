const express = require('express');
const MirissaReviewController =  require('../controller/MirissaReviewController');

const router = express.Router();

router.post('/saveReview', MirissaReviewController.saveReview);
router.get('/getAllReviews', MirissaReviewController.getAllReviews);

module.exports = router;
