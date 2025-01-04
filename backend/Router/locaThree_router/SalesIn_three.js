const express = require('express');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal')
const { body } = require('express-validator');
const salesIn_three_controller = require('../../Controller/locaThree_contro/SalesIn_three_controller');

const Router = express();

Router.get('/api/salesIn_three', salesIn_three_controller.index);

Router.post('/api/salesIn_three', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is Required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required'),
], ErrorMessageHandal, salesIn_three_controller.store);

Router.get('/api/salesIn_three/:id', salesIn_three_controller.show);

Router.patch('/api/salesIn_three/:id', ErrorMessageHandal, salesIn_three_controller.updated);

Router.delete('/api/salesIn_three/:id', salesIn_three_controller.destory);

module.exports = Router;