const express = require('express');
const { body } = require('express-validator');
const Dashboard_controller = require('../../Controller/locaOne_contro/Dashboard_controller');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/dashboard', Dashboard_controller.index);

Router.post('/api/dashboard',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandal, Dashboard_controller.store);

Router.get('/api/dashboard/:id', Dashboard_controller.show);

Router.delete('/api/dashboard/:id', Dashboard_controller.destory);

Router.patch('/api/dashboard/:id', Dashboard_controller.update);


module.exports = Router