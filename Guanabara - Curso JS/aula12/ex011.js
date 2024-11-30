Exemplos:

var idade = 21
if (idade < 18) {
    console.log(`Menor de idade`)

} else {
console.log(`Maior de idade`)
}

 var idade = 18
 console.log(`Você te ${idade} anos`)
if (idade < 16) {
    console.log(`Não vota`)
} else if(idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else { //if (idade >=18) {  opcional
    console.log(`Voto Obrigatório`)
}