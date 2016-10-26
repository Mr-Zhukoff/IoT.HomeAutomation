var express = require('express');
var router = express.Router();

router.get('/', function (reg, res) {
    res.render('index');
});
router.get('/index', function (reg, res) {
    res.render('index');
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