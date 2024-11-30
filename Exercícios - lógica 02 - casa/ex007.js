// Verificar se é ano bissexto:
// Escreva um programa que verifique se um ano inserido pelo usuário é bissexto ou não. Um ano bissexto é aquele que é divisível por 4, exceto os anos que são divisíveis por 100 mas não por 400.

var readline = require('readline-sync')
var n1 = Number(readline.question('Digite um numero: '))

if( n1  %  4 == 0){
    console.log( 'O ano é bissexto')
}else {
    console.log ('O ano não é bissexto')
}
