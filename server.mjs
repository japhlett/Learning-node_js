import {createServer} from 'node:http';
import {unlink,writeFile} from 'node:fs';

// create http server
const server = createServer((req, res) => {
    console.log(req.url);
    if (req.url.includes('create')) {
        // create a file 
        writeFile('./hello.html', '<h1>Learning Node.js</h1>', (err)=>{
            console.log(err);
            // Return response
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end('<h1>File added<h1>');
        });
    } else {
        // delete file
        unlink('/hello.html', ()=>{
             // Return response
             res.writeHead(200, {'Content-Type': 'text/html'});
             res.end('<h1>File deleted<h1>');
         });
    }
});

// listen for incoming requests
server.listen(3000,'127.0.0.1', () => {
    console.log('Server is running');
});

// Arrow function
const handleRequest = () => {}