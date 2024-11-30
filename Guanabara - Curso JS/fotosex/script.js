function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {  // IGUAL OU|| MAIOR QUE ANO//
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        img.width = 200 // Ajustar o tamanho da imagem
        
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-bebe-m.png')

            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-adolm.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-h-adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'bebê-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-adolf.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-m-adulta.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idosa-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}
