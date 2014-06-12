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