// import http = require('http')
// import url = require('url')
"use strict";
var http = require('http');
var url = require('url');
function handler(req, resp) {
    console.log('request received from: ', req.headers);
      var body = [];
    req.on('data', function(chunk) {
      console.log('data received from request body: ', chunk)
      body.push(chunk);
    }).on('end', function() {
      body = Buffer.concat(body).toString();
      // at this point, `body` has the entire request body stored in it as a string
      console.log('body: ', body);
  });
    // console.log('i wont return', req.destroy());
    var parsedUrl = url.parse(req.url, true); // true parses the query string
    resp.write('hello ');
    resp.write('from ');
    resp.end('nodejs');
}
http.createServer(handler)
    .listen(5000, console.log('server started') )




/* Handle errors*/
// http.createServer(function(request, response) {
//   request.on('error', function(err) {
//     console.error(err);
//     response.statusCode = 400;
//     response.end();
//   });
//   response.on('error', function(err) {
//     console.error(err);
//   });
//   if (request.method === 'GET' && request.url === '/echo') {
//     request.pipe(response);
//   } else {
//     response.statusCode = 404;
//     response.end();
//   }
// }).listen(8080);