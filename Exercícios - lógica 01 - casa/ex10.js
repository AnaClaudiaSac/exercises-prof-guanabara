//10. Escreva um programa que calcule o preço de um produto com desconto com base no valor original e em uma porcentagem de desconto.

var readline = require('readline-sync')
var valorProduto = Number(readline.question('Digite um valor: '))
var valorPorCentagem = Number(readline.question('Digite o valor da porcentagem:% '))
var valorTotal = 0

valorTotal = (valorPorCentagem/valorProduto) * 100
console.log('O valor com desconto é: ' + valorTotal)


 


