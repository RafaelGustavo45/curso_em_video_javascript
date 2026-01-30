function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var corp = window.document.getElementById('corpo');
    //hora=3;
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 5) {
        img.src = 'fotomadrugada.jpeg'
        document.body.style.background = '#43244d'
        corp.style.background = '#1c4657';
    }
    else if (hora >= 5 && hora < 12) {
        img.src = 'fotom.jpeg'
        document.body.style.background = '#c2b755'
        corp.style.background = '#bee45d';
       
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fotot.jpeg'
        document.body.style.background = '#fd9a58'
        corp.style.background = '#96b93e';
    } else { //de 18 ate 24 horas
        img.src = 'foton.jpeg'
        document.body.style.background = '#29294b'
        corp.style.background = '#33161f';
    }
}