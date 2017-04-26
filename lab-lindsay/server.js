'use strict';

const bodyParser = require('./lib/body-parser');
const http = require('http');
const url = require('url');
const queryString = require('queryString');
const cowsay = require('cowsay');
const PORT = process.env.PORT || 3000;

const server = module.exports = http.createServer(function(req, res) {
  //console.log(req.url);
  req.url = url.parse(req.url);
  req.url.query = queryString.parse(req.url.query);

  if(req.method === 'POST') {
//NOTE: below is a cURL command that can be run from the terminal when your server is running
// curl -H "Content-Type: application/json" -X POST -d '{"text": "moo!"}' http://localhost:3000/cowsay

// curl (primary command)
// -H "Content-Type: application/json" (sets the headers)
// -X POST (sets the POST method)
// -d {"text": "moo!"} (sets the req.body data)
// http://localhost:3000/cowsay (url for the request)
  if(req.url.pathame ===)


  }
})
