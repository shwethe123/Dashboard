const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const orderIn_three_controller = require('../../Controller/locaThree_contro/orderIn_three_controller');

const Router = express();

Router.get('/api/orderIn_three', orderIn_three_controller.index);

Router.post('/api/orderIn_three', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is Required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reson').notEmpty().withMessage('reson is required')
], ErrorMessageHandal, orderIn_three_controller.store);

Router.get('/api/orderIn_three/:id', orderIn_three_controller.show);

Router.patch('/api/orderIn_three/:id', orderIn_three_controller.updated);

Router.delete('/api/orderIn_three/:id', orderIn_three_controller.destory);

module.exports = Router;