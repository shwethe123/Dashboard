const express = require('express');
const Sales_out_controller = require('../../Controller/locaOne_contro/Sales_out_controller');
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/sale_out', Sales_out_controller.index);

Router.post('/api/sale_out',[
    body('Id').notEmpty().withMessage('Id is requierd'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone'),
    body('condition').notEmpty().withMessage('condition'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandle, Sales_out_controller.store);

Router.get('/api/sale_out/:id', Sales_out_controller.show);

Router.delete('/api/sale_out/:id', Sales_out_controller.destory);

Router.patch('/api/sale_out/:id', Sales_out_controller.update);

module.exports = Router;