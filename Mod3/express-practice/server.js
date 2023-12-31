// Require modules
const express = require('express');

// Create the Express app
const app = express();

// Configure the app (app.set)


// Mount middleware (app.use)


// Mount routes

app.get('/', function(req, res) {
    res.send('<h1>Hello World!!!!</h1>');
});


app.get('/home', (req, res) => {
    res.send('<h1>Home Page</h1>');
});


app.post('/', (req, res) => {
    res.send('Post method');
});


// Tell the app to listen on port 3000
app.listen(3000, function() {
 console.log('Listening on port 3000');
});