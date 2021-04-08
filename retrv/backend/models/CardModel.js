//SCHEMA/MODEL CREATION IMPORTS
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//SCHEMA CREATION
const CardsSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    question: {
        type: String
    },
    answer: {
        type: String
    }
});

module.exports = mongoose.model('cards', CardsSchema);