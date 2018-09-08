var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var PORT = 3000;
const option = {
    socketTimeoutMS: 30000,
    keepAlive: true,
    reconnectTries: 30000
};


// REQUIRE MIDDLEWARE
var instantMongoCrud = require('express-mongo-crud',option); // require the module

mongoose.connect('localhost:27017/mongocrud');

var options = { //specify options
    host: `localhost:${PORT}`
}

//USE AS MIDDLEWARE
app.use(bodyParser.json()); // add body parser
app.use(instantMongoCrud(options)); // use as middleware

app.listen(PORT, ()=>{
    console.log('started');
});