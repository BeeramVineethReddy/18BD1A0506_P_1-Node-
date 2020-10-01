var http = require("http");
http.createServer(function(req,res)
{
    res.end("Hello world in Browser");
}).listen(3000);

console.log("hwllo on console");