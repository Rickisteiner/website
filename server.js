var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){

  if (req.url === "/" || req.url === "/favicon.ico" || req.url === "/start.html") {
    fs.readFile("start.html", function(err,data){
      res.end(data.toString());
    });
  }

   else if (req.url === "/styles.css") {
    fs.readFile("styles.css", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/back.png') {
    fs.readFile("back.png", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/indexstyles.css') {
    fs.readFile("indexstyles.css", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/bookback.png') {
    fs.readFile("bookback.png", function(err,data){
      res.end(data);
    });
  }
  res.end(index);
});


server.listen(2000);
