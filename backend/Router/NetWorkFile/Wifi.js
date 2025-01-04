const express = require('express');
const wifi_controller = require('../../Controller/NetWorkFile/Wifi_controller');
const { body } = require('express-validator');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');

const Router = express();

Router.get('/api/wifi', wifi_controller.index);

Router.post('/api/wifi',[
    body('loca').notEmpty().withMessage('loca is required'),
    body('Id').notEmpty().withMessage('Id is required'),
    body('name').notEmpty().withMessage('name is required'),
    body('update_date').notEmpty().withMessage('update_date is required'),
    body('remark').notEmpty().withMessage('remark is required'),
], ErrorMessageHandle, wifi_controller.store);

Router.get('/api/wifi/:id', wifi_controller.show);

Router.patch('/api/wifi/:id', ErrorMessageHandle, wifi_controller.update);

// Router.delete('/api/wifi/:id', wifi_controller.destory);

module.exports = Router;