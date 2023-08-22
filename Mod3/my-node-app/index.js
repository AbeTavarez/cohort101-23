// import the http module from node
const http = require('http');


const hostname = '127.0.0.1';
const port = 3000;

// create a server
const server = http.createServer((req, res) => {
    console.log(req.url);
    console.log(req.method);
    console.log(req);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Nodejs Demo!');
});


// set the server to listen for requests on port 3000
server.listen(port, hostname, () => {
    console.log(`Server is running on port ${port}`);
});