// Import the module http
const http = require('http');


const notes = [

    {
        id : 1,
        content : 'JavaScript is a Functionality',
        important : true
    },

    {
        id : 2,
        content : 'CSS is a Styling',
        important : false
    },

    {
        id : 3,
        content : 'React is a both (1) and (2)',
        important : true
    },

]

// Define the server hostname and port number
const hostname = '127.0.0.1';  // local host IP Address
const port     = 4000;         // user defined


// create a server
const server = http.createServer( (req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(notes));
})


// Make the server to listen to the different port number
server.listen(port,hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
});