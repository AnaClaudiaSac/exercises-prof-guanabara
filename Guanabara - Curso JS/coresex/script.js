function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 11 //== Só para ver a mudança das imagens
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src ="image/manhã.png"
        document.body.style.background = '#e2cd9f'
    } else if (hora >=12 && hora <= 18) {
        //Boa Tarde!
        img.src = "image/tarde.png"
        document.body.style.background = '#b9846f'
    } else {
        //Boa Noite!
        img.src = "image/noite.png"
        document.body.style.background = 'rgb(12, 12, 26)'
        
    }
}



