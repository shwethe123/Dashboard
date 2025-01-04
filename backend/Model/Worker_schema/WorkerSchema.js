const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const worker_schema = new Schema({
    loca : {
        type : String,
        required : true
    },

    hard_worker : {
        type : Number,
        required : true
    },

    car_flaw : {
        type : Number,
        required : true
    },

    d_w_h : {
        type : Number,
        required : true
    },

    h_red : {
        type : Number,
        required : true
    },

    h_blue : {
        type : Number,
        required : true
    }
}, { timestamps : true});

module.exports = mongoose.model('WorkerSchema', worker_schema);