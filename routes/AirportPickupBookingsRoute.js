const express = require('express');
const AirportPickupBookingController = require('../controller/AirportPickupBookingsController');

const router = express.Router();

router.post('/saveAirBooking', AirportPickupBookingController.saveAirBooking);
router.get('/getAllAirBookings', AirportPickupBookingController.getAllAirBookings);
router.delete('/deleteAirBooking', AirportPickupBookingController.deleteAirBooking);

module.exports = router;
