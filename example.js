var bnr = require(".");

bnr.getRates(function (err, rates) {
    console.log(err || rates);
});

bnr.convert(100, "EUR", "USD", function (err, amount, output) {
    if (err) { return console.error(err); }
    console.log("Result: " + amount);
    console.log(output.input.amount + " " + output.input.currency + " are " + output.output.amount + " " + output.output.currency);
    // => Result: 106.3789647447235
    // => 100 EUR are 106.3789647447235 USD
});
