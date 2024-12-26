// 'var' é elevada (hoisted) ao topo do seu escopo, mas é inicializada com 'undefined'.

console.log(nome); // undefined (não dá erro, mas o valor é 'undefined')
var nome = "João";
console.log(nome); // João