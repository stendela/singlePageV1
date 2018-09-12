var express = require('express');
const cors = require('cors')
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var PORT = 3000;
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());
// REQUIRE MIDDLEWARE
var instantMongoCrud = require('express-mongo-crud',option); // require the module

mongoose.connect('database:27017/mongocrud');

var options = { //specify options
    host: `localhost:${PORT}`
}

//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser
app.use(instantMongoCrud(options)); // use as middleware

app.listen(PORT, ()=>{
    console.log('started');
});