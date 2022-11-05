const mongoose = require('mongoose');

var scheme = new mongoose.Schema({
    title:{
        type: String,
        require: true
    },
    director:{
        type: String,
        require: true
    },
    genre:{
        type:String,
        require:true
    },
    duration:{
        type:Number,
        require:true
    },
    logline:{
        type:String,
        require:true
    },
    status:String
})

const Moviedb = mongoose.model('moviedb', scheme);

module.exports = Moviedb;