// 5. **Tabuada:**
// Escreva um programa que solicite um número ao usuário e exiba a tabuada desse número, de 1 a 10.

var readline = require('readline-sync')
var numero = Number(readline.question('Digite um numero para ver a tabuada: '))




// Verificar se o número é válido
if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.")
} else {
  // Exibir a tabuada do número
  console.log("Tabuada do " + numero + ":")

  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}












// (num, 1, num*1)
// (num, 2, num*2)
// (num, 3, num*3)
// (num, 5, num*5)
// (num, 6, num*6)
// (num, 7, num*7)
// (num, 8, num*8)
// (num, 10,num*10)

// console.log( 'A tabuada é: ')