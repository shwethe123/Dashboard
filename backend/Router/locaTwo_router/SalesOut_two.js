const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const saleOut_two_controller = require('../../Controller/locaTwo_contro/SalesOut_two');

const Router = express();

Router.get('/api/saleOut_two', saleOut_two_controller.index);

Router.post('/api/saleOut_two', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is Required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required')
], ErrorMessageHandal, saleOut_two_controller.store);

Router.get('/api/saleOut_two/:id', saleOut_two_controller.show);

Router.patch('/api/saleOut_two/:id', ErrorMessageHandal, saleOut_two_controller.updated);

Router.delete('/api/saleOut_two/:id', saleOut_two_controller.destory);

module.exports = Router;