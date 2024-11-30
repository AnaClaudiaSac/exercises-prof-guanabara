// Par ou ímpar:
// Escreva um programa que peça um número ao usuário e determine se ele é par ou ímpar.

var readline = require('readline-sync')
var n1 = Number(readline.question('Digite um numero:  '))

if(n1  % 2 == 0) {
    console.log('O numero é par')
}else { 
    console.log('O numero é impar')
}