//5. Crie um programa que determine se um número é divisível por outro.

var readline = require('readline-sync')
var numero1 = readline.question('Digite o primeiro numero: ')
var numero2 = readline.question('Digite o segundo numero: ')




if (numero1 % numero2 == 0)
    console.log('O número é divisível')
else
    console.log('O número não é divisível')



