var http = require('http');
var mod = require('./testModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("method add is = " + mod.methodAdd(50));
    res.write("\nmethod sub is = " + mod.methodSub(50));
    res.end();
}).listen(8080);