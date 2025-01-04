const express = require('express');
const scoreController3 = require('../../Controller/GoutScore_controller/Loca3Controller');
const { body } = require('express-validator');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/score3', scoreController3.index);

Router.post('/api/score3', [
    body('ag').notEmpty().withMessage('ag is required'),
    body('row').notEmpty().withMessage('row is required'),
    body('loca').notEmpty().withMessage('loca is required'),
    body('score').isNumeric().withMessage('score must be a number').notEmpty().withMessage('score is required')
], ErrorMessageHandal, scoreController3.store);

Router.get('/api/score3/:id', scoreController3.show);

Router.patch('/api/score3/:id', scoreController3.update);

Router.delete('/api/score3/:id', scoreController3.destory);

module.exports = Router;