var http = require("http");
http.createServer(function(req, res) {
    // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body 
    // res.end("Hello World");
    res.end("HTTP server up and running which is responding to all the HTTP requests at port 8081.")
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');
