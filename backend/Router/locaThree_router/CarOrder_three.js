const express = require('express');
const carOrder_three_controller = require('../../Controller/locaThree_contro/carOrder_three_controller');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const { body } = require('express-validator');


const Router = express();

Router.get('/api/carOrder_three', carOrder_three_controller.index);

Router.post('/api/carOrder_three',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('condition').notEmpty().withMessage('condition is requierd'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required')
], ErrorMessageHandal, carOrder_three_controller.store);

Router.get('/api/carOrder_three/:id', carOrder_three_controller.show);

Router.patch('/api/carOrder_three/:id', carOrder_three_controller.updated);

Router.delete('/api/carOrder_three/:id', carOrder_three_controller.destory);

module.exports = Router;