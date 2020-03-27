const mongoose = require('mongoose');
const {Schema} = mongoose;

const Data = new Schema({
    
    msgname: String,
    msglastname: String,
    msgmail: String,
    msgtel: String,
    msgtext: String,
    list1: String,
    list2: String


});

module.exports= mongoose.model('Data', Data);
