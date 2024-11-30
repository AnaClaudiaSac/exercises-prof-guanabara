//Crie um programa que determine se um triângulo é equilátero, isósceles ou escaleno com base em seus lados.
var readline = require('readline-sync')
var n1 = readline.question('Digite um numero: ')
var n2 = readline.question('Digite um numero: ')
var n3 = readline.question('Digite um numero: ')


if (n1 == n2 && n1 == n3) {
    console.log('O triângulo é equilatero')
} else if (n1 != n2 && n1 != n3 && n2 != n3) {
    console.log('O triângulo é escaleno')
}else 
    console.log('O triângulo é isósceles')
    
 
   


