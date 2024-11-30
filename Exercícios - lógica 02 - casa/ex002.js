//Média de três números:
//Escreva um programa que solicite três números ao usuário e exiba a média deles.

var readline = require('readline-sync')
var n1 = Number(readline.question('Digite um numero:  '))
var n2 = Number(readline.question('Digite um numero:  '))
var n3 = Number(readline.question('Digite um numero:  '))

 

var media = (n1 + n2 + n3) / 3
console.log('A media dos numeros é :'  + media)


