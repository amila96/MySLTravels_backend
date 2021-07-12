const express = require('express');
const BentotaReviewController =  require('../controller/BentotaReviewController');

const router = express.Router();

router.post('/saveReview', BentotaReviewController.saveReview); /*saveCustomer()*/
router.get('/getAllReviews', BentotaReviewController.getAllReviews);

module.exports = router;
