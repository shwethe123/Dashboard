const express = require('express');
const cashier_three_controller = require('../../Controller/locaThree_contro/Cashier_three_controller');
const { body } = require('express-validator');

const Router = express();

Router.get('/api/cashier_three', cashier_three_controller.index);

Router.post('/api/cashier_three',[
    body('Id').notEmpty().withMessage('Id is required'),
    body('Ag').notEmpty().withMessage('Ag is required'),
    body('Name').notEmpty().withMessage('Name is required'),
    body('Phone').notEmpty().withMessage('Phone number is required'),
    body('condition').notEmpty().whitelist('condition is required'),
    body('selection').notEmpty().withMessage('selection is required'),
    body('reason').notEmpty().withMessage('reason is required'),
], cashier_three_controller.store);

Router.get('/api/cashier_three/:id', cashier_three_controller.show);

Router.patch('/api/cashier_three/:id', cashier_three_controller.updated);

Router.delete('/api/cashier_three/:id', cashier_three_controller.destory);

module.exports = Router;