let usd = document.querySelector('span');

async function getCurrencies() {
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const data = await response.json();
    let usdRate = data[24].rate.toFixed(2)
    
    usd.textContent =  usdRate;
}
getCurrencies()

