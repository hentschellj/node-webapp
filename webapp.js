const http    = require('http');
const url     = require('url');
const display = require('./display');

http.createServer(onRequest).listen(8888);
console.log('Server Running');

function onRequest(request, response) {
  const pathName = url.parse(request.url).pathname;
  display.displayPage(response, pathName);
}