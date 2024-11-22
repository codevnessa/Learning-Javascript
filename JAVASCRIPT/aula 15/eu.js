function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c --){
        fat *= c
        console.log(`${fat / c} x ${c - 1} = ${fat}`)
    }  
    return fat
}
let res = fatorial(5)
console.log(`Fatorial de 5 é: ${res}`)
