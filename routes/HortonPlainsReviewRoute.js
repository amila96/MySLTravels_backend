const express = require('express');
const HortonPlainsReviewController =  require('../controller/HikkaduwaReviewController');

const router = express.Router();

router.post('/saveReview', HortonPlainsReviewController.saveReview);
router.get('/getAllReviews', HortonPlainsReviewController.getAllReviews);

module.exports = router;
