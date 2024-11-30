//8. Escreva um programa que verifique se um número está dentro de um intervalo específico.

var readline = require('readline-sync')
var inicioDeIntervalo = parseInt(readline.question('Digite um numero: '))
var fimDeIntervalo =parseInt(readline.question('Digite um numero: '))
var numero = parseInt(readline.question('Digite um numero: '))


if ( numero >=inicioDeIntervalo && numero <= fimDeIntervalo ) {
    console.log('O número está dentro no intervalo')
} else {
    console.log('O número não está dentro do intervalo')
}
   

