var express = require('express');
var app = express();
var db = require('./db');
var cors = require('cors');
app.use(cors());
var UserController = require('./controller/userController');
var ZoneController = require('./controller/zoneController');
app.use('/users', UserController);
app.use('/zones', ZoneController);

module.exports = app;