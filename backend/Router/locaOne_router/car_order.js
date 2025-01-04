const express = require('express');
const { body } = require('express-validator');
const car_order_controller = require('../../Controller/locaOne_contro/car_order_controller');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/car_order', car_order_controller.index);

Router.post('/api/car_order',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is requierd'),
    body('Name').notEmpty().withMessage('Name is requiried'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('condition').notEmpty().withMessage('condition'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandal , car_order_controller.store);

Router.get('/api/car_order/:id', car_order_controller.show);

Router.delete('/api/car_order/:id', car_order_controller.destory);

Router.patch('/api/car_order/:id', car_order_controller.update);

module.exports = Router;