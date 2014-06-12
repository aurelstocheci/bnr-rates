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
```

##Example output

```javascript
{
    "Publisher": "National Bank of Romania",
    "PublishingDate": "2014-06-11",
    "OrigCurrency": "RON",
    "Rates": {
        "AED": {
            "multiplier": 1,
            "amount": "0.8843"
        },
        "AUD": {
            "multiplier": 1,
            "amount": "3.0517"
        },
        "BGN": {
            "multiplier": 1,
            "amount": "2.2477"
        },
        "BRL": {
            "multiplier": 1,
            "amount": "1.4618"
        },
        "CAD": {
            "multiplier": 1,
            "amount": "2.9807"
        },
        "CHF": {
            "multiplier": 1,
            "amount": "3.6080"
        },
        "CNY": {
            "multiplier": 1,
            "amount": "0.5215"
        },
        "CZK": {
            "multiplier": 1,
            "amount": "0.1601"
        },
        "DKK": {
            "multiplier": 1,
            "amount": "0.5892"
        },
        "EGP": {
            "multiplier": 1,
            "amount": "0.4543"
        },
        "EUR": {
            "multiplier": 1,
            "amount": "4.3960"
        },
        "GBP": {
            "multiplier": 1,
            "amount": "5.4534"
        },
        "HUF": {
            "multiplier": "100",
            "amount": "1.4394"
        },
        "INR": {
            "multiplier": 1,
            "amount": "0.0548"
        },
        "JPY": {
            "multiplier": "100",
            "amount": "3.1822"
        },
        "KRW": {
            "multiplier": "100",
            "amount": "0.3198"
        },
        "MDL": {
            "multiplier": 1,
            "amount": "0.2336"
        },
        "MXN": {
            "multiplier": 1,
            "amount": "0.2492"
        },
        "NOK": {
            "multiplier": 1,
            "amount": "0.5432"
        },
        "NZD": {
            "multiplier": 1,
            "amount": "2.7827"
        },
        "PLN": {
            "multiplier": 1,
            "amount": "1.0679"
        },
        "RSD": {
            "multiplier": 1,
            "amount": "0.0381"
        },
        "RUB": {
            "multiplier": 1,
            "amount": "0.0945"
        },
        "SEK": {
            "multiplier": 1,
            "amount": "0.4864"
        },
        "TRY": {
            "multiplier": 1,
            "amount": "1.5525"
        },
        "UAH": {
            "multiplier": 1,
            "amount": "0.2788"
        },
        "USD": {
            "multiplier": 1,
            "amount": "3.2481"
        },
        "XAU": {
            "multiplier": 1,
            "amount": "131.8128"
        },
        "XDR": {
            "multiplier": 1,
            "amount": "4.9937"
        },
        "ZAR": {
            "multiplier": 1,
            "amount": "0.3013"
        }
    }
}
```