// 6. **Fatorial:**
// Escreva um programa que solicite um número ao usuário e calcule o fatorial desse número. O fatorial de um número é o produto de todos os inteiros de 1 até o próprio número.

var readline = require('readline-sync')
var numero = Number(readline.question('Digite um numero: '))

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro não negativo.");
  } else {
    // Inicializar uma variável para armazenar o fatorial
    var fatorial = 1;
  
    // Calcular o fatorial do número
    for (var i = 1; i <= numero; i++) {
      fatorial *= i;
    }
  
    // Exibir o resultado
   console.log("O fatorial de " + numero + " é: " + fatorial);
  }