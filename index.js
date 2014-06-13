'use strict';
var fs = require('fs'),
    request = require('request'),
    htmlparser = require('htmlparser'),
    tasks = [];

module.exports.getRates = function (callback) {
    function getBnrRates() {
        request({uri: "http://www.bnro.ro/nbrfxrates.xml"}, function(err, res, body) {
            if (err) return next(err);
            if (res.statusCode != 200) {
                return next(new Error('Abnormal response status code'))
            }
            next(null, body);
        });
    }
    function parseBnrRates(xml) {
        var handler = new htmlparser.RssHandler();
        var parser = new htmlparser.Parser(handler);
        var rates = {};
        parser.parseComplete(xml);
        var header = handler.dom[1].children[0];
        var body = handler.dom[1].children[1];
        rates.Publisher = header.children[0].children[0].data;
        rates.PublishingDate = header.children[1].children[0].data;
        rates.OrigCurrency = body.children[1].children[0].data;
        rates.Rates = {};
        for(var i=0; i<body.children[2].children.length; i++) {
            rates.Rates[body.children[2].children[i].attribs.currency] = {};
            rates.Rates[body.children[2].children[i].attribs.currency].multiplier = body.children[2].children[i].attribs.multiplier !== undefined ? parseInt(body.children[2].children[i].attribs.multiplier) : 1;
            rates.Rates[body.children[2].children[i].attribs.currency].amount = parseFloat(body.children[2].children[i].children[0].data);
        }
        next(null, rates);
    }
    function next(err, result) {
        if (err) throw err;
        var currentTask = tasks.shift();
        if (currentTask) {
            currentTask(result);
        }
    }
    tasks = [getBnrRates, parseBnrRates, callback];
    next();
};
