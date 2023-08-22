const express = require('express');
const fs = require('fs');

// Create app
const app = express();
const port = 3000;

// App Template Engine Definition
app.engine('madeline', (filePath, options, callback) => {
    // reading a file from our app
    fs.readFile(filePath, (err, content) => {
        // check if there was an error reading the file
        if (err) return callback(err);

        const rendered = content.toString()
        .replace('#title#', '<title>' + options.title + '</title>')
        .replace('#message#', '<h1>' + options.message + '</h1>')
        .replace('#content#', '<div>' + options.content + '</div>');

        // console.log(rendered);
        return callback(null, rendered);
    })
});

// App Config
app.set('views', './views');
app.set('view engine', 'madeline');

// Routes
app.get('/', (req, res) => {
    res.render('template', {title: 'Hello World', message: 'First template engine!', content: 'Nodejs and Express!'});
});

app.get('/about-me', (req, res) => {
    res.render('template', {title: 'Developer', message: 'I love the backend!', content: 'I use Nodejs and Express!'});
});

app.get('/contact-me', (req, res) => {
    res.render('template', {title: 'DM me!', message: 'Hello!', content: 'watsup!'});
});


app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});