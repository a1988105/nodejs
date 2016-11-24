var http = require('http');

var server = http.createServer();
server.listen(process.env.PORT || 5000);
