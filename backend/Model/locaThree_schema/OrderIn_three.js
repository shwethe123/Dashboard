const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderIn_three_schema = new Schema({
    Id: {
        type: Number,
        required: true
    },
    Ag: {
        type: String,
        required: true
    },
    Name: {
        type: String,
        required: true
    },
    Phone: {
        type: String,
        required: true
    },
    condition : {
        type: String,
        required: true
    },
    selection: {
        type: String,
        required: true
    }
}, { timestamps : true});

module.exports = mongoose.model('OrderIn_three', orderIn_three_schema);