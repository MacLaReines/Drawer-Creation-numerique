const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

// Configuration pour éviter le DeprecationWarning
mongoose.set('strictQuery', true); // ou false selon vos besoins

// Définition du schéma pour Item
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true // Correctement orthographié
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
        required: true // Correctement orthographié
    },
    color: {
        type: String,
        required: true // Correctement orthographié
    }
});

// Création du modèle
const Item = mongoose.model('Item', ItemSchema);

// Exportation du modèle
module.exports = Item;
