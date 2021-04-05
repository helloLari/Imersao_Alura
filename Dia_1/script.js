let valorDolarText = prompt("Valor em dólar:")
let valorDolarNumber = parseFloat(valorDolarText) // transforma oq foi digitado para numero

let valorReal = valorDolarNumber * 5.50 // faz a conversão do valor digitado
let valorRealFixed = valorReal.toFixed(2) // retorna em casas decimais o calculo
alert(valorRealFixed)