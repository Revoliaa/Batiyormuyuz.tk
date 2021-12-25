const usdValue = document.getElementsByClassName("usd-value")[0];
const eurValue = document.getElementsByClassName("eur-value")[0];
const gbpValue = document.getElementsByClassName("gbp-value")[0];
const aznValue = document.getElementsByClassName("azn-value")[0];
const bgnValue = document.getElementsByClassName("bgn-value")[0];
const dkkValue = document.getElementsByClassName("dkk-value")[0];
const rubValue = document.getElementsByClassName("rub-value")[0];
const cnyValue = document.getElementsByClassName("cny-value")[0];

let apikey = "YOUR_API_KEY";

fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=USD&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        usdValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ))

fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=EUR&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        eurValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ));

fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=GBP&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        gbpValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ));
    
fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=AZN&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        aznValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ));
    
fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=BGN&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        bgnValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ));

fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=DKK&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        dkkValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ));

fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=RUB&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        rubValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ));

fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=CNY&apikey=' + apikey)
    .then(response => response.json())
    .then(data => (
        cnyValue.innerHTML = data.data.TRY.toFixed(5) + " TL"
    ));     
