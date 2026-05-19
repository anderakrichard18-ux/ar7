const http = require('http');
http.createServer((req,res)=>{res.writeHead(200,{'Content-Type':'text/plain'});res.end('auth-service placeholder');}).listen(3001);
console.log('auth-service running on http://localhost:3001');
