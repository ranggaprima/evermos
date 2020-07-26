const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
const server = express();
var dotenv = require('dotenv').config();
const API_URL = process.env.API_URL;

server.use(express.static(path.join(__dirname, 'frontend/build')));
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))
server.disable("x-powered-by")

server.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

server.post('/api/getMovie', (req,res) => {
  const url = API_URL + 'films';

  request(url, function(error, response, body) {
    res.json(JSON.parse(body))
  })
});

server.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
});

const port = process.env.PORT || 5000;
server.listen(port);

console.log('App is listening on port ' + port);
