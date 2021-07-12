const express = require('express');
const GalleFortReviewController =  require('../controller/GalleFortReviewController');

const router = express.Router();

router.post('/saveReview', GalleFortReviewController.saveReview);
router.get('/getAllReviews', GalleFortReviewController.getAllReviews);

module.exports = router;
