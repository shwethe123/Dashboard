const express = require('express');
const Rechart_controller = require('../../Controller/RechartsFile/Rechrts')
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/rechart', Rechart_controller.index);

Router.post('/api/rechart',[
    body('value').notEmpty().withMessage('value is requierd'),
    body('name').notEmpty().withMessage('name is required')
], ErrorMessageHandle, Rechart_controller.store);

// Router.get('/api/sale_out/:id', Sales_out_controller.show);

// Router.delete('/api/sale_out/:id', Sales_out_controller.destory);

// Router.patch('/api/sale_out/:id', Sales_out_controller.update);

module.exports = Router;