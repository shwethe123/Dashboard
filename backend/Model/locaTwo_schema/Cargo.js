const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const car_go_schema = new Schema({
    Id : {
        type : Number,
        required : true
    },

    Ag : {
        type : String,
        required : true
    },
    Name : {
        type : String,
        required : true
    },

    Phone : {
        type : Number,
        required : true
    },
    condition : {
        type : String,
        required : true
    },

    selection : {
        type : String,
        required : true
    },
    reason: {
        type: String,
        required: true
    }
}, { timestamps : true});

module.exports = mongoose.model('Car_go', car_go_schema);