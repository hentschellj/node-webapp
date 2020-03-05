const http = require('http');

http.createServer(onRequest).listen(8888);
console.log('Server Running');

function onRequest(request, response) {
  response.writeHead(200);
  response.write('Hello!');
  response.end();
}