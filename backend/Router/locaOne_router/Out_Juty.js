const express = require('express');
const out_juty_controller = require('../../Controller/locaOne_contro/Out_juty_controller');
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/outjuty', out_juty_controller.index);

Router.post('/api/outjuty', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is required'),
    body('condition').notEmpty().withMessage('condition'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandle, out_juty_controller.store);

Router.get('/api/outjuty/:id', out_juty_controller.show);

Router.delete('/api/outjuty/:id', out_juty_controller.destory);

Router.patch('/api/outjuty/:id', out_juty_controller.update);

module.exports = Router;