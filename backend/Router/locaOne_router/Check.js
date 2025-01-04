const express = require('express');
const { body } = require('express-validator');
const chack_controller = require('../../Controller/locaOne_contro/Chack_controller');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/chack', chack_controller.index);

Router.post('/api/chack', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('condition').notEmpty().withMessage('condition is required'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandle, chack_controller.store);

Router.get('/api/chack/:id', chack_controller.show);

Router.delete('/api/chack/:id', chack_controller.destory);

Router.patch('/api/chack/:id', ErrorMessageHandle, chack_controller.update);


module.exports = Router;