// 9. **Contagem regressiva:**
// Escreva um programa que exiba uma contagem regressiva a partir de 10 até 1, com uma pausa de 1 segundo entre cada número. No final, exiba "Feliz Ano Novo!".

var readline = require('readline-sync')
//var numero = Number(readline.question(' '))
  
  // Iniciar a contagem regressiva a partir de 10
  contagemRegressiva(10)

  function contagemRegressiva(numero) {
    if (numero === 0) {
      console.log("Feliz Ano Novo!");
    } else {
      console.log(numero);
      setTimeout(function() {
        contagemRegressiva(numero - 1);
      }, 1000); // 1000 milissegundos = 1 segundo
    }
  }
  
  // Iniciar a contagem regressiva a partir de 10
  contagemRegressiva(10);