const express = require('express');
const order_in_controller = require('../../Controller/locaOne_contro/Order_in_one_controller');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const { body } = require('express-validator');

const Router = express();

Router.get('/api/order_in', order_in_controller.index);

Router.post('/api/order_in',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('condition').notEmpty().withMessage('condition'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandal, order_in_controller.store);

Router.get('/api/order_in/:id', order_in_controller.show);

Router.patch('/api/order_in/:id', order_in_controller.update);

Router.delete('/api/order_in/:id', order_in_controller.destory);

module.exports = Router;