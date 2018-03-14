const createLorem = require('./dataModule');
const http = require('http');

const hostname = '127.0.0.1';
const port = 3011;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

	const a = createLorem(10);
	
	res.end(JSON.stringify(a));
});

server.listen(port, hostname, () => {
	console.log('Server running at http://' + hostname + ':' + port + '/');
});