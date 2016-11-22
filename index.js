'use strict';
var fs = require('fs'),
    request = require('request'),
    htmlparser = require('htmlparser');

exports.getRates = function (callback) {
    var tasks = [];
    function getBnrRates() {
        request({uri: "http://www.bnro.ro/nbrfxrates.xml"}, function(err, res, body) {
            if (err) return next(err);
            if (res.statusCode != 200) {
                return next(new Error('Abnormal response status code'))
            }
            next(null, body);
        });
    }
    function parseBnrRates(err, xml) {
        var handler = new htmlparser.RssHandler();
        var parser = new htmlparser.Parser(handler);
        var rates = {};
        parser.parseComplete(xml);
        var header = handler.dom[1].children[0];
        var body = handler.dom[1].children[1];
        rates.Publisher = header.children[0].children[0].data;
        rates.PublishingDate = header.children[1].children[0].data;
        rates.OrigCurrency = body.children[1].children[0].data;
        rates.Rates = {
            RON: { multiplier: 1, amount: 1 }
        };
        for(var i=0; i<body.children[2].children.length; i++) {
            rates.Rates[body.children[2].children[i].attribs.currency] = {};
            rates.Rates[body.children[2].children[i].attribs.currency].multiplier = body.children[2].children[i].attribs.multiplier !== undefined ? parseInt(body.children[2].children[i].attribs.multiplier) : 1;
            rates.Rates[body.children[2].children[i].attribs.currency].amount = parseFloat(body.children[2].children[i].children[0].data);
        }
        next(null, rates);
    }
    function next(err, result) {
        var currentTask = tasks.shift();
        if (err) return callback(err);
        if (currentTask) {
            currentTask(null, result);
        }
    }
    tasks = [getBnrRates, parseBnrRates, callback];
    next();
};

exports.convert = function (amount, firstCurrency, secondCurrency, callback) {
    exports.getRates(function (err, res) {
        if (err) { return callback(err); }
        var sourceCurrency = res.Rates[firstCurrency];
        if (!sourceCurrency) {
            return callback(new Error("Invalid first currency: " + firstCurrency));
        }
        var targetCurrency = res.Rates[secondCurrency];
        if (!targetCurrency) {
            return callback(new Error("Invalid second currency: " + secondCurrency));
        }
        var result = amount * (sourceCurrency.amount / sourceCurrency.multiplier) / (targetCurrency.amount * targetCurrency.multiplier);
        callback(null, result, {
            input: {
                currency: firstCurrency,
                currency_obj: sourceCurrency,
                amount: amount
            },
            output: {
                currency: secondCurrency,
                currency_obj: targetCurrency,
                amount: result
            }
        });
    });
};
