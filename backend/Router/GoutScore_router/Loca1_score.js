const express = require('express');
const scoreController = require('../../Controller/GoutScore_controller/Loca1Controller');
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/score', scoreController.index);

Router.post('/api/score', [
    body('ag').notEmpty().withMessage('ag is required'),
    body('row').notEmpty().withMessage('row is required'),
    body('loca').notEmpty().withMessage('loca is required'),
    body('score').isNumeric().withMessage('score must be a number').notEmpty().withMessage('score is required')
], ErrorMessageHandle, scoreController.store);

Router.get('/api/score/:id', scoreController.show);

Router.patch('/api/score/:id', scoreController.update);

Router.delete('/api/score/:id', scoreController.destory);

module.exports = Router;
