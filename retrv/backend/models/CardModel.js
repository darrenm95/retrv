//SCHEMA/MODEL CREATION IMPORTS
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//SCHEMA CREATION
const CardsSchema = new mongoose.Schema({
    id: {
        type: Number
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cards', CardsSchema);