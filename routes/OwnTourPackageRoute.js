const express = require('express');
const OwnTourPackageController =  require('../controller/OwnTourPackageController');

const router = express.Router();

router.post('/saveOwnTourpackage', OwnTourPackageController.saveOwnTourpackage);
router.get('/getAllOwnTourPackages', OwnTourPackageController.getAllOwnTourPackages);
router.delete('/deleteOwnTourPackage', OwnTourPackageController.deleteOwnTourPackage);

module.exports = router;
