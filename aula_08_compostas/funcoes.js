function parimp(n){
    if(n%2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

let res = parimp(43543);

console.log(res);

function fatorial(n){
    let fat =1;
    for(let c=n; c>1;c--){
        fat *= c
    }
    return fat
}

console.log(fatorial(5));


function fatorialRecursiva(n){
    if(n==1){
        return 1
    } else{
        return n * fatorialRecursiva(n-1)
    }
}

console.log(fatorialRecursiva(8));