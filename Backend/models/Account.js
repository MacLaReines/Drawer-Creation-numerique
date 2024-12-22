const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require('dotenv').config();

// Définition du schéma pour Acc
const AccSchema = new Schema({
    mail: {
        type: String,
        required: true // Champ obligatoire
    },
    password: {
        type: String,
        required: true // Champ obligatoire
    }
});

// Création du modèle
const Acc = mongoose.model('Acc', AccSchema); // Utilisation correcte du nom 'Acc'

// Exportation du modèle
module.exports = Acc;
