// Maior número:
// Escreva um programa que solicite três números ao usuário e exiba o maior deles.
var readline = require('readline-sync')
var n1 = Number(readline.question('Digite um numero:  '))
var n2 = Number(readline.question('Digite um numero:  '))
var n3 = Number(readline.question('Digite um numero:  '))
var maiorNumero

// Verificar qual dos números é o maior
if (n1 >= n2 && n1 >= n3) {
  maiorNumero = n1
} else if (n2 >= n1 && n2 >= n3) {
  maiorNumero = n2;
} else {
  maiorNumero = n3
}

console.log("O maior número é: " + maiorNumero)