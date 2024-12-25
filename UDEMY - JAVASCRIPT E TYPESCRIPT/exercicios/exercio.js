let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

/*
let a = varB
let b = varC
let c = varA
*/
[varA, varB, varC] = [varB, varC, varA]
console.log(a, b, c)