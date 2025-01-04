const express = require('express');
const scoreController2 = require('../../Controller/GoutScore_controller/Loca2Controller');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/score2', scoreController2.index);

Router.post('/api/score2', [
    body('ag').notEmpty().withMessage('ag is required'),
    body('row').notEmpty().withMessage('row is required'),
    body('loca').notEmpty().withMessage('loca is required'),
    body('score').isNumeric().withMessage('score must be a number').notEmpty().withMessage('score is required')
], ErrorMessageHandal, scoreController2.store);

Router.get('/api/score2/:id', scoreController2.show);

Router.patch('/api/score2/:id', scoreController2.update);

Router.delete('/api/score2/:id', scoreController2.destory);

module.exports = Router;