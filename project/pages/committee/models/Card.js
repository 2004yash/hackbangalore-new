const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
    topic: String,
    description: String
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;