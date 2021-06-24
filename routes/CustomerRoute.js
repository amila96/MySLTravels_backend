const express = require('express');
const CustomerController =  require('../controller/CustomerController');

const router = express.Router();

//post (save) [body]
router.post('/saveCustomer', CustomerController.saveCustomer); /*saveCustomer()*/
//saveCustomer is method name
//get(fetch) [headers]
router.get('/getAllCustomers', CustomerController.getAllCustomers);
//delete(delete) [headers]
router.delete('/deleteCustomer', CustomerController.deleteCustomer);
//PUT(Update) [Body]
router.put('/updateCustomer', CustomerController.updateCustomer);


module.exports = router;
