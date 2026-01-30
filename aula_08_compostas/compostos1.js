let num = [8,1,7,4,2,9]

console.log(`O vetor tem ${num.length} posições`)

console.log(`O primeiro valor do vetor é ${num[0]}`)
num.push(3)
console.log(`Nosso vetor é o ${num}`)
num.sort()
console.log(`Nosso vetor ordenado é o ${num}`)

for(let pos=0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

num.sort();

for (let pos in num){
    console.log(num[pos])
}

console.log(`O valor 4 está na posição ${num.indexOf(4)}`)