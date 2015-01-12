var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req,res){

  if (req.url === "/" || req.url === "/favicon.ico") {
    fs.readFile("index.html", function(err,data){
      res.end(data.toString());
    });
  }

  else if (req.url === '/about.html') {
    fs.readFile("about.html", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/work.html') {
    fs.readFile("work.html", function(err,data){
      res.end(data);
    });
  }

   else if (req.url === "/styles.css") {
    fs.readFile("styles.css", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/aboutstyles.css') {
    fs.readFile("aboutstyles.css", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/workstyles.css') {
    fs.readFile("workstyles.css", function(err,data){
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

  else if (req.url === '/backMain.jpg') {
    fs.readFile("back3.jpg", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/calc.png') {
    fs.readFile("calc.png", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/book.png') {
    fs.readFile("book.png", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/chat.png') {
    fs.readFile("chat.png", function(err,data){
      res.end(data);
    });
  }

  else if (req.url === '/logos.png') {
    fs.readFile("logos.png", function(err,data){
      res.end(data);
    });
  }

   else if (req.url === '/ResumeWeb.pdf') {
    fs.readFile("ResumeWeb.pdf", function(err,data){
      res.end(data);
    });
  }

});


server.listen(8080);
