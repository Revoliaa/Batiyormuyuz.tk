const usdValue = document.getElementsByClassName("usd-value")[0];
const eurValue = document.getElementsByClassName("eur-value")[0];
const gbpValue = document.getElementsByClassName("gbp-value")[0];
const aznValue = document.getElementsByClassName("azn-value")[0];
const bgnValue = document.getElementsByClassName("bgn-value")[0];
const dkkValue = document.getElementsByClassName("dkk-value")[0];
const rubValue = document.getElementsByClassName("rub-value")[0];
const cnyValue = document.getElementsByClassName("cny-value")[0];

let apikey = "cdb487c0-539a-11ec-b7b6-313fba5b5e01";

fetch("https://api.vatcomply.com/rates?base=USD")
    .then(response => response.json())
    .then(data => (
        usdValue.innerHTML = data.rates.TRY.toFixed(5) + " TL"
    ))

fetch('https://api.vatcomply.com/rates?base=EUR')
    .then(response => response.json())
    .then(data => (
        eurValue.innerHTML = data.rates.TRY.toFixed(5) + " TL"
    ));

fetch('https://api.vatcomply.com/rates?base=GBP')
    .then(response => response.json())
    .then(data => (
        gbpValue.innerHTML = data.rates.TRY.toFixed(5) + " TL"
    ));
    
fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=AZN&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        aznValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ));
    
fetch('https://api.vatcomply.com/rates?base=BGN')
    .then(response => response.json())
    .then(data => (
        bgnValue.innerHTML = data.rates.TRY.toFixed(5) + " TL"
    ));

fetch('https://api.vatcomply.com/rates?base=DKK')
    .then(response => response.json())
    .then(data => (
        dkkValue.innerHTML = data.rates.TRY.toFixed(5) + " TL"
    ));

fetch('https://api.vatcomply.com/rates?base=RUB')
    .then(response => response.json())
    .then(data => (
        rubValue.innerHTML = data.rates.TRY.toFixed(5) + " TL"
    ));

fetch('https://api.vatcomply.com/rates?base=CNY')
    .then(response => response.json())
    .then(data => (
        cnyValue.innerHTML = data.rates.TRY.toFixed(5) + " TL"
    ));     