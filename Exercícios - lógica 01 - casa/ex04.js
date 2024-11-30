//4. Escreva um programa que calcule o maior entre dois números.

var readline = require('readline-sync')
var numero1 = readline.question('Digite o primeiro numero: ')
var numero2 = readline.question('Digite o segundo numero: ')
var resultado = null



if (numero1 > numero2)
    resultado = numero1
else
    resultado = numero2

console.log('O maior numero é: ' + resultado)