const express = require('express');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal')
const { body } = require('express-validator');
const salesIn_two_controller = require('../../Controller/locaTwo_contro/SalesIn_two');

const Router = express();

Router.get('/api/salesIn_two', salesIn_two_controller.index);

Router.post('/api/salesIn_two', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is Required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required')
], ErrorMessageHandal, salesIn_two_controller.store);

Router.get('/api/salesIn_two/:id', salesIn_two_controller.show);

Router.patch('/api/salesIn_two/:id', salesIn_two_controller.updated);

Router.delete('/api/salesIn_two/:id', salesIn_two_controller.destory);

module.exports = Router;