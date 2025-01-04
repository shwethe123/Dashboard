const express = require('express');
const WorkerController = require('../../Controller/Worker_controller/Worker_controller');
const ErrorMessageHandal = require('../../Middleware/ErrorMessageHandal');
const {body} = require('express-validator');

const Router = express();

Router.get('/api/worker', WorkerController.index);

Router.post('/api/worker',[
    body('loca').notEmpty().withMessage('loca is required'),
    body('hard_worker').notEmpty().withMessage('hard_worker is required'),
    body('car_flaw').notEmpty().withMessage('car_flaw is required'),
    body('d_w_h').notEmpty().withMessage('d_w_h is required'),
    body('h_red').notEmpty().withMessage('h_red si required'),
    body('h_blue').notEmpty().withMessage('h_blue is required')
], ErrorMessageHandal, WorkerController.store);

Router.get('/api/worker/:id', WorkerController.show);

Router.patch('/api/worker/:id', ErrorMessageHandal, WorkerController.update);

Router.delete('/api/worker/:id', WorkerController.destory);

module.exports = Router;