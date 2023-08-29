const mongoose = require('mongoose');


//  schema definition
const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    readyToEat: Boolean
});

// fruit model

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;