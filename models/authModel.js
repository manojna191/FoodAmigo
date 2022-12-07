const mongoose = require('mongoose')

const userschema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User', userschema);
module.exports = User;
