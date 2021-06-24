const express = require('express');
const ContactUsMessageController =  require('../controller/ContactUsMessageController');

const router = express.Router();

//post (save) [body]
router.post('/saveMessage', ContactUsMessageController.saveMessage); /*saveCustomer()*/
//saveCustomer is method name
//get(fetch) [headers]
router.get('/getAllMessages', ContactUsMessageController.getAllMessages);
//delete(delete) [headers]
router.delete('/deleteMessage', ContactUsMessageController.deleteMessage);

module.exports = router;
