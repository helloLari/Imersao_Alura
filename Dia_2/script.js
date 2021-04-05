var primeiroValor = parseInt(prompt("Digite o primeiro valor: "))
// var primeiroValorInt = primeiroValor.parseInt();


var segundoValor = parseInt(prompt("Digite o segundo valor: ")) // = significa atribuir valor


var operacao = prompt("Digite 1 para fazer uma Divisão, 2 para fazer uma Multiplicação, 3 para Soma e 4 para Subtração: ")

if (operacao == 1) { // == está comparando se os valores são iguais / e o If(se) está dizendo q se operação for igual a 1 ele faz tal coisa
    var resultado = primeiroValor / segundoValor
    document.write("<h2>" + primeiroValor + " / " + segundoValor + " = " + resultado + "</h2>") // Concatenação = mesclar letras e números
} else if (operacao == 2) {
    var resultado = primeiroValor * segundoValor
    document.write("<h2>" + primeiroValor + " * " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 3) {
    var resultado = primeiroValor + segundoValor
    document.write("<h2>" + primeiroValor + " + " + segundoValor + " = " + resultado + "</h2>")
} else if (operacao == 4) {
    var resultado = primeiroValor - segundoValor
    document.write("<h2>" + primeiroValor + " - " + segundoValor + " = " + resultado + "</h2>")
}else{
   document.write("<h2>Opção Inválida</h2>")
}


// Alert = dispara um alerta na tela
//document.write() = Imprime(escreve) na tela
//if = se
// ELSE(SE NÃO) se o if tiver errado ele entra no else(se não)
// else if = se não se
// concatenação = juntar palavra com variáveis ex: ("palavra" + variavel)
// == - comparação é diferente do = que usamos para atribuição