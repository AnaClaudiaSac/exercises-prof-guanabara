
//3. Crie um programa que determine se um ano é bissexto ou não.

var readline = require('readline-sync')
var numero = readline.question('Digite um ano: ')

if (numero % 4 == 0) {
    console.log('O Ano é Bissexto')
} else {
    console.log('O Ano não é Bissexto')
}