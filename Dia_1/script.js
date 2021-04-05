let valorDolarText = prompt("Valor em dólar:")
let valorDolarNumber = parseFloat(valorDolarText)

let valorReal = valorDolarNumber * 5.50
let valorRealFixed = valorReal.toFixed(2)
alert(valorRealFixed)