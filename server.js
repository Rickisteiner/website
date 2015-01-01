var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){

  if (req.url === "/" || req.url === "/favicon.ico" || req.url === "/start.html") {
    fs.readFile("index.html", function(err,data){
      res.end(data.toString());
    });
  }

   else if (req.url === "/styles.css") {
    fs.readFile("styles.css", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/back3.jpg') {
    fs.readFile("back3.jpg", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/me.jpg') {
    fs.readFile("me.jpg", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/about.html') {
    fs.readFile("about.hrml", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === 'aboutstyles.css') {
    fs.readFile("aboutstyles.css", function(err,data){
      res.end(data);
    });
  }
  else if (req.url === '/work.html') {
    fs.readFile("work.hrml", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === 'workstyles.css') {
    fs.readFile("workstyles.css", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/backMain.jpg') {
    fs.readFile("back3.jpg", function(err,data){
      res.end(data);
    });
  }


});


server.listen(2000);
