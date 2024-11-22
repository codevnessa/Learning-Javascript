/*let num = [5,4,6,7,]
num.push(1) //a ordem importa, se colocar o sort primeiro depois o push, ele vai ser o ultimo mesmo sendo o menor valor
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)*/
/*console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])*/

let valores = [4,5,6,7,9,3]
let pos = valores.indexOf(9)
console.log(`O valor está na posicao ${pos}`)
for(let pos = 0 ;pos < valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
