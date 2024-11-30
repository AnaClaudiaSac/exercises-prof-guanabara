//Crie um programa que determine se uma pessoa pode votar com base em sua idade.

var readline = require('readline-sync')
var idade = parseInt(readline.question('Quantos anos voce tem: '))


if (idade == 16 || idade == 17 || idade >= 65 ) {
    console.log('Voto opcional')
} else if ( idade < 18) {
    console.log( 'Menor de idade, não vota')
} else if (idade >= 18 ) {
    console.log('Maior de idade, você vota')
} 

    


