//2. Escreva um programa que verifique se um número é par ou ímpar.

var readline = require('readline-sync')
var numero = readline.question('Digite um numero: ')


if (numero % 2 == 0) {
    console.log('O numero é par')
} else {
    console.log('O numero é impar')
}