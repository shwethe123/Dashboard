const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GoutScoreSchema = new Schema({
    ag : {
        type : String,
        required : true
    },

    name : {
        type : String,
        required : true
    },

    location : {
        type : String,
        required : true
    },

    score : {
        type : Number,
        required : true
    }
}, { timestamps : true });

module.exports = mongoose.model('GoutScoreSchema', GoutScoreSchema);