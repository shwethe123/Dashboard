const express = require('express');
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');
const audit_controller = require('../../Controller/locaOne_contro/Audit_controller');

const Router = express();

Router.get('/api/audit', audit_controller.index);

Router.post('/api/audit', [
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone is requied'),
    body('condition').notEmpty().withMessage('condition'),
    body('selection').notEmpty().withMessage('selection is requierd'),
    body('reason').notEmpty().withMessage('reason is requierd')
], ErrorMessageHandle, audit_controller.store);

Router.get('/api/audit/:id', audit_controller.show);

Router.delete('/api/audit/:id', audit_controller.destory);

Router.patch('/api/audit/:id', audit_controller.update);

module.exports = Router;