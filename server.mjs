import {createServer} from 'node:http';

// define request handler


// create http server
const server = createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>We have an HTTP Server<h1>');
});

// listen for incoming requests
server.listen(3000,'127.0.0.1', () => {
    console.log('Server is running');
});

// Arrow function
const handleRequest = () => {}