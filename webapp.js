const http  = require('http');
const url   = require('url');

http.createServer(onRequest).listen(8888);

function onRequest(request, response) {
  const pathName = url.parse(request.url).pathname;
  displayPage(response, pathName);
}

function displayPage(response, pathName) {
  if (contentMap[pathName]) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(contentMap[pathName]);
    response.end();
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('Error 404 Page Not Found');
    response.end();
  }
}

const contentMap = {
  '/'         : '<h1>Home Page</h1>',
  '/about'    : '<h1>About Page</h1>',
  '/users'    : '<h1>Users</h1>',
  '/contact'  : '<h1>Contact Page</h1>',
  '/privacy'  : '<h1>Privacy</h1>'
}