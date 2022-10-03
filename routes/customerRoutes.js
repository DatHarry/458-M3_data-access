const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router
    .route('/') 
    .get(customerController.getAllCutstomers) 
    .post(customerController.createNewCustomers);

router
    .route('/:id') 
    .get(customerController.getCustomersByID) 
    .patch(customerController.patchCustomersById) 
    .delete(customerController.deleteCustomersByID);
module.exports = router;

