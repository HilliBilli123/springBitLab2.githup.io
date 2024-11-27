sellOrBuy = {
    usd: {buy: 429, sell: 431},
    eur: {buy: 507, sell: 509}
}
function onChangeCurrency(){
    selectCurrency = document.querySelector("#currency")
    selectBuyOrSell = document.querySelector("#buyOrSell")
    value = document.querySelector("#value")
    USD = document.querySelector("#USD")
    EUR = document.querySelector("#EUR")
    KZT = document.querySelector("#KZT")
    intValue = value.value
    if(selectCurrency.value == "USD"){
        if(selectBuyOrSell.value == "buy"){
            EUR.value = ((intValue * sellOrBuy.usd.buy) / sellOrBuy.eur.buy).toFixed(2)
            KZT.value = (intValue * sellOrBuy.usd.buy).toFixed(2)
            USD.value = null
        }
        if(selectBuyOrSell.value == "sell"){
            EUR.value = ((intValue * sellOrBuy.usd.sell) / sellOrBuy.eur.sell).toFixed(2)
            KZT.value = (intValue * sellOrBuy.usd.sell).toFixed(2)
            USD.value = null
        }
    }
    if(selectCurrency.value == "EUR"){
        if(selectBuyOrSell.value == "buy"){
            USD.value = ((intValue * sellOrBuy.eur.buy) / sellOrBuy.usd.buy).toFixed(2)
            KZT.value = (intValue * sellOrBuy.eur.buy).toFixed(2)
            EUR.value = null
        }
        if(selectBuyOrSell.value == "sell"){
            USD.value = ((intValue * sellOrBuy.eur.sell) / sellOrBuy.usd.sell).toFixed(2)
            KZT.value = (intValue * sellOrBuy.eur.sell).toFixed(2)
            EUR.value = null
        }
    }
    if(selectCurrency.value == "KZT"){
        if(selectBuyOrSell.value == "buy"){
            EUR.value = (intValue / sellOrBuy.eur.buy).toFixed(2)
            USD.value = (intValue / sellOrBuy.usd.buy).toFixed(2)
            KZT.value = null
        }
        if(selectBuyOrSell.value == "sell"){
            EUR.value = (intValue / sellOrBuy.eur.sell).toFixed(2)
            USD.value = (intValue / sellOrBuy.usd.sell).toFixed(2)
            KZT.value = null
        }
    }
}