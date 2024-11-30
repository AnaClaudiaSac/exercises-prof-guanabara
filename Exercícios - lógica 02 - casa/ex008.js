// 8. **Conversor de temperatura:**
// Escreva um programa que converta uma temperatura em graus Celsius para Fahrenheit. A fórmula é: **`F = (C × 9/5) + 32`**.

var readline = require('readline-sync')
var celsius = Number(readline.question('Digite temperatura Em C  '))


fahrenheit = (celsius * 9 / 5) + 32


console.log('A temperatura em graus Fahrenheit é:  ' +  fahrenheit )