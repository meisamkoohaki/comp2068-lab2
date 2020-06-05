'use strict';
var express = require('express');
var router = express.Router();
var message = "";
var result = 0;
/* GET home page. */
router.get('/', function (req, res) {
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var method = req.query.method;

    if (method == "add") {
        result = x + y;
        console.log(x + " + " + y + " = " + result);
        message = x + " + " + y + " = " + result;
    } else if (method == "subtract") {
        result = x - y;
        console.log(x + " - " + y + " = " + result);
        message = x + " - " + y + " = " + result;
    } else if (method == "multiply") {
        result = x * y;
        console.log(x + " * " + y + " = " + result);
        message = x + " * " + y + " = " + result;
    } else if (method == "divide") {
        result = x / y;
        console.log(x + " / " + y + " = " + result);
        message = x + " / " + y + " = " + result;
    } else if (method || method == "") {
        console.log("Error -------------<< input meyhod is wrong!>>");
        message = "Error -------------<< input meyhod is wrong!>>";
    }

    res.render('index', {
        title: 'Express',
        message: message

    });
});

module.exports = router;
