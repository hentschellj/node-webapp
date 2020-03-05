const http  = require('http');
const url   = require('url');

http.createServer(onRequest).listen(8888);

function onRequest(request, response) {
  const pathName = url.parse(request.url).pathname;
  console.log('Path Name ' + pathName);
  response.writeHead(200);
  response.write('Hello!');
  response.end();
}