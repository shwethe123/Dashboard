const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const gout_three_controller = require('../../Controller/locaThree_contro/gOut_three_controller');

const Router = express();

Router.get('/api/gout_three', gout_three_controller.index);

Router.post('/api/gout_three',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is Required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required'),
], ErrorMessageHandal, gout_three_controller.store);

Router.get('/api/gout_three/:id', gout_three_controller.show);

Router.patch('/api/gout_three/:id', ErrorMessageHandal, gout_three_controller.update);

Router.delete('/api/gout_three/:id', gout_three_controller.destory);

module.exports = Router;