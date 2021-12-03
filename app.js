const usdValue = document.getElementsByClassName("usd-value")[0];
const euroValue = document.getElementsByClassName("euro-value")[0];
const sterlinValue = document.getElementsByClassName("sterlin-value")[0];
const manatValue = document.getElementsByClassName("manat-value")[0];
const dinarValue = document.getElementsByClassName("dinar-value")[0];

fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=USD&apikey=')
    .then(response => response.json())
    .then(data => (
        usdValue.innerHTML = data.data.TRY + " TL"
    ));

    fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=EUR&apikey=')
    .then(response => response.json())
    .then(data => (
        euroValue.innerHTML = data.data.TRY + " TL"
    ));

    fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=GBP&apikey=')
    .then(response => response.json())
    .then(data => (
        sterlinValue.innerHTML = data.data.TRY + " TL"
    ));

    fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=AZN&apikey=')
    .then(response => response.json())
    .then(data => (
        manatValue.innerHTML = data.data.TRY + " TL"
    ));


    fetch('https://freecurrencyapi.net/api/v2/latest?base_currency=BHD&apikey=')
    .then(response => response.json())
    .then(data => (
        dinarValue.innerHTML = data.data.TRY + " TL"
    ));     
