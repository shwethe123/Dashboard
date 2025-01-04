const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const wifi_schema = new Schema({
    loca : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    Id : {
        type : Number,
        required : true
    },

    update_date : {
        type : Date,
        required : true
    },
    remark : {
        type : String,
        required : true
    }
}, { timestamps : true });

module.exports = mongoose.model('WifiUp', wifi_schema);