function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verfique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '../imagem/criancahomem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../imagem/jovemhomem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', '../imagem/homemadulto.jpg')
            } else {
                //idoso
                img.setAttribute('src', '../imagem/velho.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', '../imagem/criancamulher.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', '../imagem/mulherjovem.jpg')
            } else if (idade < 50) {
                //adulta
                img.setAttribute('src', '../imagem/mulheradulta.jpg')
            } else {
                //idosa
                img.setAttribute('src', '../imagem/velha.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}