const mongoose = require('mongoose')
const Schema = mongoose.Schema;
require('dotenv').config();
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        require: true
    },
    color: {
        type: String,
        require: true
    }
});

const Item = mongoose.model('Item', ItemSchema);
module.exports = Item;
