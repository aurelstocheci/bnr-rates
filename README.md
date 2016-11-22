#bnr-rates

Exchange rates fetched from National Bank of Romania

##Instaling

    $ npm install bnr-rates

##Simple to use

```javascript
var bnrRates = require('bnr-rates');
bnrRates.getRates(function(rates){
    console.log(JSON.stringify(rates,null,4));
});

bnr.convert(100, "EUR", "USD", function (err, amount, output) {
    if (err) { return console.error(err); }
    console.log("Result: " + amount);
    console.log(output.input.amount + " " + output.input.currency + " are " + output.output.amount + " " + output.output.currency);
    // => Result: 106.3789647447235
    // => 100 EUR are 106.3789647447235 USD
});
```

##Example output

```javascript
{
    "Publisher": "National Bank of Romania",
    "PublishingDate": "2014-06-13",
    "OrigCurrency": "RON",
    "Rates": {
        "AED": {
            "multiplier": 1,
            "amount": 0.882
        },
        "AUD": {
            "multiplier": 1,
            "amount": 3.0442
        },
        "BGN": {
            "multiplier": 1,
            "amount": 2.2477
        },
        "BRL": {
            "multiplier": 1,
            "amount": 1.4528
        },
        "CAD": {
            "multiplier": 1,
            "amount": 2.9835
        },
        "CHF": {
            "multiplier": 1,
            "amount": 3.6132
        },
        "CNY": {
            "multiplier": 1,
            "amount": 0.5217
        },
        "CZK": {
            "multiplier": 1,
            "amount": 0.1603
        },
        "DKK": {
            "multiplier": 1,
            "amount": 0.5893
        },
        "EGP": {
            "multiplier": 1,
            "amount": 0.4531
        },
        "EUR": {
            "multiplier": 1,
            "amount": 4.396
        },
        "GBP": {
            "multiplier": 1,
            "amount": 5.4971
        },
        "HUF": {
            "multiplier": 100,
            "amount": 1.4327
        },
        "INR": {
            "multiplier": 1,
            "amount": 0.0543
        },
        "JPY": {
            "multiplier": 100,
            "amount": 3.1778
        },
        "KRW": {
            "multiplier": 100,
            "amount": 0.3182
        },
        "MDL": {
            "multiplier": 1,
            "amount": 0.2335
        },
        "MXN": {
            "multiplier": 1,
            "amount": 0.2489
        },
        "NOK": {
            "multiplier": 1,
            "amount": 0.5401
        },
        "NZD": {
            "multiplier": 1,
            "amount": 2.8047
        },
        "PLN": {
            "multiplier": 1,
            "amount": 1.0665
        },
        "RSD": {
            "multiplier": 1,
            "amount": 0.0381
        },
        "RUB": {
            "multiplier": 1,
            "amount": 0.0941
        },
        "SEK": {
            "multiplier": 1,
            "amount": 0.4868
        },
        "TRY": {
            "multiplier": 1,
            "amount": 1.5285
        },
        "UAH": {
            "multiplier": 1,
            "amount": 0.2745
        },
        "USD": {
            "multiplier": 1,
            "amount": 3.2395
        },
        "XAU": {
            "multiplier": 1,
            "amount": 132.5956
        },
        "XDR": {
            "multiplier": 1,
            "amount": 4.9922
        },
        "ZAR": {
            "multiplier": 1,
            "amount": 0.3012
        }
    }
}
```
