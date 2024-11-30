var agora = new Date()  //Mostra a hora do sistema que está rodando.
var hora = agora.getHours
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log(`Bom Dia!`)
} else if (hora <= 18) {
    console.log(`Boa Tarde`)
}else {
    console.log(`Boa noite`)
}