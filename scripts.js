const button = document.querySelector('button')
const select = document.getElementById('selectCoin')


const convertValues = async () =>{
    const input = document.querySelector('input').value
    const realValue = document.getElementById('currency')
    const convert = document.getElementById('convertDolar')

    const data = await fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(response => response.json())

    
    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const btc = data.BTCBRL.high * 0.000001
    realValue.innerHTML = new Intl.NumberFormat('pt-br',
    { style: 'currency', currency: 'BRL' }
  ).format(input);

  if(select.value === 'US$: Dolar Americano'){
    convert.innerHTML = new Intl.NumberFormat('en-US',
    { style: 'currency', currency: 'USD' }
    ).format(input/dolar);
} 
    
    if(select.value === '€ : Euro'){
    convert.innerHTML = new Intl.NumberFormat('de-DE',
    { style: 'currency', currency: 'EUR' }
    ).format(input/euro);
}
    if(select.value === '₿ : Bitcoin'){
    convert.innerHTML = new Intl.NumberFormat('BTC',
    { style: 'decimal', currency: 'BTC',  maximumFractionDigits: '8' }
    ).format(input*btc);
}

}

const changeCurrency = () => {
    const nameCoin = document.getElementById('coinConvert')
    const img = document.getElementById('countryConvert')

    if(select.value === '€ : Euro'){
        nameCoin.innerHTML = 'Euro'
        img.src = './assets/euro.png'
    }
    
    if (select.value === 'US$: Dolar Americano'){
        nameCoin.innerHTML = 'Dólar'
        img.src = "./assets/estados-unidos .png"
    }

    if (select.value === '₿ : Bitcoin'){
        nameCoin.innerHTML = 'Bitcoin'
        img.src = "./assets/btc.png"
    }

}

button.addEventListener('click', convertValues )
select.addEventListener('change', changeCurrency)