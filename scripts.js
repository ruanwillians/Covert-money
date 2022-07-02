const button = document.querySelector('button')
const dolar = 5.2
const euro = 5.9
const btc = 0.0000097
const select = document.getElementById('selectCoin')


const convertValues = () =>{
    const input = document.querySelector('input').value
    const realValue = document.getElementById('currency')
    const convert = document.getElementById('convertDolar')

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