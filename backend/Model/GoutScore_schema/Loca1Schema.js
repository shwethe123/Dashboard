const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const loca1_score_schema = new Schema({
    ag : {
        type : String,
        required : true
    },

    row : {
        type : String,
        required : true
    },

    loca : {
        type : String,
        required : true
    },

    score : {
        type : Number,
        required : true
    }
}, { timestamps : true });

module.exports = mongoose.model('LocaOneScore', loca1_score_schema);