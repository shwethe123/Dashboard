const express = require('express');
const allScoreController = require('../../Controller/GoutScore_controller/GoutAll_score');
const ErrorMessageHandle = require('../../Middleware/ErrorMessageHandal');
const { body } = require('express-validator');

const router = express.Router();

router.get('/api/allScore', allScoreController.index);

router.post('/api/allScore',
    [
        body('ag').notEmpty().withMessage('Ag is required'),
        body('name').notEmpty().withMessage('Name is required'),
        body('location').notEmpty().withMessage('Location is required'),
        body('score').notEmpty().withMessage('Score is required'),
    ], ErrorMessageHandle , allScoreController.store);

router.get('/api/allScore/:id', allScoreController.show);

router.patch('/api/allScore/:id', allScoreController.update);

router.delete('/api/allScore/:id', allScoreController.destroy);

module.exports = router;