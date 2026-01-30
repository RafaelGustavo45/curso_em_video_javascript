let num = document.querySelector('input#fnum');
let lista = document.querySelector('select#flista');
let res = document.querySelector('div#res');
let valores = [];

function isNumero(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true;
  } else {
    return false;
  }
}

function inLista(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true;
  } else {
    return false;
  }
}

function adicionar(){
    if(isNumero(num.value)&& !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `Valor ${num.value} adicionado.`;
        lista.appendChild(item);
    } else {
        window.alert('Valor inválido ou já encontrado na lista.');
    }
    num.value = '';
    num.focus();

}

function finalizar(){
    if(valores.length == 0){
        window.alert('Adicione valores antes de finalizar!');
    } else {
        let listar = [];
        listar = buscar(valores);
        let soma = listar[0];
        let media = listar[1];
        let maior = listar[2];
        let menor = listar[3];
        let total = listar[4];
        res.innerHTML = '';
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        res.innerHTML += `<p> O maior valor informado foi ${maior} . e o menor foi ${menor} </p>`; 
        res.innerHTML += `<p> Somando todos os valores, temos ${soma} .</p>`;
        res.innerHTML += `<p> A média dos valores digitados é ${media} .</p>`;  


    }
}

function buscar(lista){
    let quais = [];
    //calculo da media
    let sum=0;
    for(let pos in lista){
        sum += lista[pos];
    }
    quais.push(sum);
    let med = sum / lista.length;
    quais.push(med);
    //busca do maior e menor
    let maior = Math.max(...lista);
    let menor = Math.min(...lista);
    quais.push(maior);
    quais.push(menor);
    quais.push(lista.length);
    return quais;
}