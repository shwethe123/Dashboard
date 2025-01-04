const express = require('express');
const user_store_controller = require('../../Controller/User_store/User_store')
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');
const { body } = require('express-validator');

const router = express();

router.post('/api/user/login', user_store_controller.login);

router.post('/api/user/registor',[
    body('name').notEmpty().withMessage('name is required'),
    body('email').notEmpty().withMessage('email is required'),
    body('email').custom(async value =>  {
        const user = await user_store_controller.findOne({email : value});
        if (user) {
            return Promise.reject('Email already exists');
        };
    }),
    body('password').notEmpty().withMessage('password is required'),
    body('password').isLength({min: 6}).withMessage('password must be at least 6 character long'),
    body('email').isEmail().withMessage('email is not valid')
], ErrorMessageHandle, user_store_controller.registor);

module.exports = router;