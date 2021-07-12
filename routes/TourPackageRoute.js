const express = require('express');
const TourPackagesController =  require('../controller/TourPackagesController');

const router = express.Router();

//post (save) [body]
router.post('/saveTourPackage', TourPackagesController.saveTourPackage); /*saveCustomer()*/
//get(fetch) [headers]
router.get('/getAllTourPackages', TourPackagesController.getAllTourPackages);
//delete(delete) [headers]
router.delete('/deleteTourPackage', TourPackagesController.deleteTourPackage);
//PUT(Update) [Body]
router.put('/updateTourPackage', TourPackagesController.updateTourPackage);


module.exports = router;
