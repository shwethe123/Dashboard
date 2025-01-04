const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const cargo_two_controller = require('../../Controller/locaTwo_contro/Cargo_controller');

const Router = express();

Router.get('/api/cargo_two', cargo_two_controller.index);

Router.post('/api/cargo_two',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Phone').notEmpty().withMessage('Phone Number is Required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required')
], ErrorMessageHandal, cargo_two_controller.store);

Router.get('/api/cargo_two/:id', cargo_two_controller.show);

Router.patch('/api/cargo_two/:id', cargo_two_controller.updated);

Router.delete('/api/cargo_two/:id', cargo_two_controller.destory);

module.exports = Router;