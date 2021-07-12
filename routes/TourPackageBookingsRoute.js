const express = require('express');
const TourPackageBookingController = require('../controller/TourPackageBookingsController');

const router = express.Router();

router.post('/saveTpBooking', TourPackageBookingController.saveTpBooking);
router.get('/getAllTpBookings', TourPackageBookingController.getAllTpBookings);
router.delete('/deleteTpBooking', TourPackageBookingController.deleteTpBooking);

module.exports = router;

