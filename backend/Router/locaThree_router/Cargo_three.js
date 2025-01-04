const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');
const cargo_three_controller = require('../../Controller/locaThree_contro/Corgo_three');

const Router = express();

Router.get('/api/cargo_three', cargo_three_controller.index);

Router.post('/api/cargo_three', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required'),
], ErrorMessageHandle, cargo_three_controller.store);

Router.get('/api/cargo_three/:id', cargo_three_controller.show);

Router.patch('/api/cargo_three/:id', ErrorMessageHandle, cargo_three_controller.updated);

Router.delete('/api/cargo_three/:id', cargo_three_controller.destory);

module.exports = Router;