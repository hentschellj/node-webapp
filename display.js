const content = require('./content');

function displayPage(response, pathName) {
  if (content.contentMap[pathName]) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(content.contentMap[pathName]);
    response.end();
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' });
    response.write('Error 404 Page Not Found');
    response.end();
  }
}

exports.displayPage = displayPage;