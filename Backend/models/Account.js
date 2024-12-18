const mongoose = require('mongoose')
const Schema = mongoose.Schema;
require('dotenv').config();
const AccSchema = new Schema({
    mail: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const Acc = mongoose.model('Item', AccSchema);
module.exports = Acc;
