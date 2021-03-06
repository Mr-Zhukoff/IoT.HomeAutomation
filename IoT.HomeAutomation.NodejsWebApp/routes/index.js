﻿var express = require('express');
var router = express.Router();
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database('./sensor-data.db');


router.get(['/', '/index'], function (reg, res) {
    db.serialize(() => {
        var today = new Date(new Date().setHours(0, 0, 0, 0));
        db.all("SELECT id, temp, hum, timestamp FROM SensorReadings WHERE timestamp > " + today.getTime(), function (err, data) {
            if (err) {
                console.error(err.message);
            } else {
                var formattedData = [];
                for (var i = 0, len = data.length; i < len; i++) {
                    formattedData.push({
                        temp: data[i].temp,
                        hum: data[i].hum,
                        time: new Date(data[i].timestamp).toLocaleString()
                    });
                }
                res.render('index', {
                    title: "Home Automation - Index page",
                    sensorData: encodeURIComponent(JSON.stringify(formattedData))
                });
            }
        });
    });
});
router.get('/login', function (reg, res) {
    res.render('login');
});
router.get('/blank', function (reg, res) {
    res.render('blank');
});
router.get('/flot', function (reg, res) {
    res.render('flot');
});
router.get('/morris', function (reg, res) {
    res.render('morris');
});
router.get('/grid', function (reg, res) {
    res.render('grid');
});
router.get('/buttons', function (reg, res) {
    res.render('buttons');
});
router.get('/icons', function (reg, res) {
    res.render('icons');
});
router.get('/forms', function (reg, res) {
    res.render('forms');
});
router.get('/notifications', function (reg, res) {
    res.render('notifications');
});
router.get('/panels-wells', function (reg, res) {
    res.render('panels-wells');
});
router.get('/tables', function (reg, res) {
    res.render('tables');
});
router.get('/typography', function (reg, res) {
    res.render('typography');
});

module.exports = router;