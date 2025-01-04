const express = require('express');
const cashier_two_controller = require('../../Controller/locaTwo_contro/Cashier_two_controller');
const { body } = require('express-validator');

const Router = express();

Router.get('/api/cashier_two', cashier_two_controller.index);

Router.post('/api/cashier_two',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone number is required'),
    body('condition').notEmpty().whitelist('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required')
], cashier_two_controller.store);

Router.get('/api/cashier_two/:id', cashier_two_controller.show);

Router.patch('/api/cashier_two/:id', cashier_two_controller.updated);

Router.delete('/api/cashier_two/:id', cashier_two_controller.destory);

module.exports = Router;