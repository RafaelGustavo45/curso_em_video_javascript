function verificar(){
    //alert('funcionou');
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('res');
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        //window.alert('Idade calculada: ' + idade);
        var genero = '';
        if (fsex[0].checked){
            genero = 'Homem';
        } else if (fsex[1].checked){
            genero = 'Mulher';  
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        window.alert('Detectamos ' + genero + ' com ' + idade + ' anos.');

    }
}