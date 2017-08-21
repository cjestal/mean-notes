var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var database = require('./config/database')
var port = process.env.PORT || 8888;

mongoose.connect(database.url);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended': 'true' }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// Routes
require('./app/routes.js')(app);

//listen
app.listen(port);
console.log("Notes app listening on port: " + port);
