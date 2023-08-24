const express = require('express');
const fruits = require('./models/fruits');

const app = express();
const PORT = 3000;


// Routes
app.get('/', (req, res) => {
    res.send('working')
});

/**
 * @path /fruits
 * @method GET
 * @action index
 * @description returns a list of fruits
 */
app.get('/fruits', (req, res) => {
    res.send(fruits);
});

/**
 * @path /fruits/indexOfFruitArray
 * @param /:indexOfFruitArray
 * @method GET
 * @action show 
 * @description return a single fruit
 */
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    const {indexOfFruitsArray} = req.params;

    res.send(fruits[indexOfFruitsArray]);
});





app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});