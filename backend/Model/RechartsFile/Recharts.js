const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const rechart_schema = new Schema({
    value : {
        types : Number,
        required : true
    },
    name : {
        types : String,
        required : true
    }
}, { timestamps : true});

module.exports = mongoose.model('Schema', rechart_schema);