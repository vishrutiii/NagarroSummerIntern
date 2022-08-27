var http = require('http');
var fs = require('fs');
const display = require('./routes');
// const { listenerCount } = require('process');

const server = http.createServer(display);

server.listen(3001);
