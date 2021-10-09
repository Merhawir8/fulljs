to run the server
./node_modules/.bin/babel-node server.js

import config, { nodeEnv } from './config';

console.log(config, nodeEnv);