const getText = require('./figletApp.js').getText;
// Ili const {getText} = require('./figletApp.js');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3008;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const a = getText();
  res.end(a);
});

server.listen(port, hostname, () => {
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
