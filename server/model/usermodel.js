const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    mobile : {
        type : String,
        required : true,
        unique : true
    },
    city : String
});

const Userdb = mongoose.model('users', schema);

module.exports = Userdb;