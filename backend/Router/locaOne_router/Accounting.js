const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');
const Accounting_controller = require('../../Controller/locaOne_contro/Accounting_controller');

const Router = express();

Router.get('/api/accounting', Accounting_controller.index);

Router.post('/api/accounting', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is requied'),
    body('condition').notEmpty().withMessage('condition'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandle, Accounting_controller.store);

Router.get('/api/accounting/:id', Accounting_controller.show);

Router.delete('/api/accounting/:id', Accounting_controller.destory);

Router.patch('/api/accounting/:id', Accounting_controller.update);

module.exports = Router;    