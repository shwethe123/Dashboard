const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const Order_in_two_controller_controller = require('../../Controller/locaOne_contro/order_in_two_controller');

const Router = express();

Router.get('/api/order_in_two', Order_in_two_controller_controller.index);

Router.post('/api/order_in_two',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('condition').notEmpty().withMessage('condition'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandal, Order_in_two_controller_controller.store);

Router.get('/api/order_in_two/:id', Order_in_two_controller_controller.show);

Router.delete('/api/order_in_two/:id', Order_in_two_controller_controller.destory);

Router.patch('/api/order_in_two/:id', Order_in_two_controller_controller.update);


module.exports = Router