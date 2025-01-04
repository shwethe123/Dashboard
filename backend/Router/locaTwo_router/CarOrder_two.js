const express = require('express');
const carOrder_two_controller = require('../../Controller/locaTwo_contro/carOrder_two_controller');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const { body } = require('express-validator');


const Router = express();

Router.get('/api/carOrder_two', carOrder_two_controller.index);

Router.post('/api/carOrder_two',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('condition').notEmpty().withMessage('condition is requierd'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required')
], ErrorMessageHandal, carOrder_two_controller.store);

Router.get('/api/carOrder_two/:id', carOrder_two_controller.show);

Router.patch('/api/carOrder_two/:id', carOrder_two_controller.updated);

Router.delete('/api/carOrder_two/:id', carOrder_two_controller.destory);

module.exports = Router;