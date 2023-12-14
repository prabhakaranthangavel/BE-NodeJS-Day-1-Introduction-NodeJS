// Import the module http
const http = require('http');


// Define the server hostname and port number
const hostname = '127.0.0.1';  // local host IP Address
const port     = 3000;         // user defined


// create a server
const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
})


// Make the server to listen to the different port number
server.listen(port,hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});