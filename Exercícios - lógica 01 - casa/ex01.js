//1. Crie um programa que determine se um número é positivo, negativo ou zero.

var readline = require('readline-sync')
var numero = readline.question('Digite um numero: ')

if (numero == 0) {
    console.log('Número é zero')
} else if (numero > 0){
    console.log('Número é positivo')
}else {
    console.log('O número é negativo')
}

 
