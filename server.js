// to run the server
// ./node_modules/.bin/babel-node server.js

// import config, { nodeEnv } from './config';

// console.log(config, nodeEnv);


import http from 'http';

const server = http.createServer();

server.listen(8080);

server.on('request', (req, res) => {
    res.write('Hello HTTP!\n');
    setTimeout(() => {
        res.write('I can stream!\n');
        res.end();
    }, 3000);
});