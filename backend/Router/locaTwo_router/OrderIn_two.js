const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const orderIn_two_controller = require('../../Controller/locaTwo_contro/orderIn_two');

const Router = express();

Router.get('/api/orderIn_two', orderIn_two_controller.index);

Router.post('/api/orderIn_two', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is Required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required'),
], ErrorMessageHandal, orderIn_two_controller.store);

Router.get('/api/orderIn_two/:id', orderIn_two_controller.show);

Router.patch('/api/orderIn_two/:id', orderIn_two_controller.updated);

Router.delete('/api/orderIn_two/:id', orderIn_two_controller.destory);

module.exports = Router;