const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');
const Sales_in_controller = require('../../Controller/locaOne_contro/Sales_inController');

const Router = express();

Router.get('/api/sales_in', Sales_in_controller.index);

Router.post('/api/sales_in', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is requied'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandle, Sales_in_controller.store);

Router.get('/api/sales_in/:id', Sales_in_controller.show);

Router.delete('/api/sales_in/:id', Sales_in_controller.destory);

Router.patch('/api/sales_in/:id', Sales_in_controller.update);

module.exports = Router;