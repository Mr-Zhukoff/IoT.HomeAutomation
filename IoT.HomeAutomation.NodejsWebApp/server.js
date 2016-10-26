var http = require('http');
var express = require('express');

var port = Number(process.env.PORT || 3000);
var app = express();
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

var routes = require('./routes/index');

app.use('/', routes);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
});

app.listen(port);
console.log('App service is running at port ' + port);