const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const saleOut_three_controller = require('../../Controller/locaThree_contro/SalesOut_three_controller');

const Router = express();

Router.get('/api/saleOut_three', saleOut_three_controller.index);

Router.post('/api/saleOut_three', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is Required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required'),
], ErrorMessageHandal, saleOut_three_controller.store);

Router.get('/api/saleOut_three/:id', saleOut_three_controller.show);

Router.patch('/api/saleOut_three/:id', ErrorMessageHandal, saleOut_three_controller.update);

Router.delete('/api/saleOut_three/:id', saleOut_three_controller.destory);

module.exports = Router;