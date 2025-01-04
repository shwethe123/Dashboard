const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const gout_two_controller = require('../../Controller/locaTwo_contro/G_out_controller');

const Router = express();

Router.get('/api/gout_two', gout_two_controller.index);

Router.post('/api/gout_two',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is Required'),
    body('Phone').notEmpty().withMessage('Phone Number is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required')
], ErrorMessageHandal, gout_two_controller.store);

Router.get('/api/gout_two/:id', gout_two_controller.show);

Router.patch('/api/gout_two/:id', ErrorMessageHandal, gout_two_controller.update);

Router.delete('/api/gout_two/:id', gout_two_controller.destory);

module.exports = Router;