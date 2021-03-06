﻿var http = require('http');
var express = require('express');
var exphbs = require('express-handlebars');
var sqlite3 = require('sqlite3').verbose();

var port = Number(process.env.PORT || 3000);
var app = express();

app.use(express.static(__dirname + '/public'));
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

var db = new sqlite3.Database('./sensor-data.db');

db.serialize(() => {
    db.run('create table if not exists SensorReadings ('
        + 'id numeric primary key, '
        + 'temp numeric, '
        + 'hum numeric, '
        + 'timestamp datetime)');
});

var routes = require('./routes/index');
app.use('/', routes);


app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(port);
console.log('App service is running at port ' + port);

