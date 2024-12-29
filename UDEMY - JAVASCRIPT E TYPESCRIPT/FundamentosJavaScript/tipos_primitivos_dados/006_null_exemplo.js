/**
 * Resumo: Este código mostra como null é usado para representar a ausência intencional de valor.
 * Uso prático: Use null para indicar que uma variável deve estar vazia ou não definida intencionalmente.
 */

// Variável definida como null
let y = null;
console.log(y); // null

// Verificando se uma variável é null
if (y === null) {
    console.log("y foi definido como null.");
} else {
    console.log("y não é null.");
}

// Comparando null e undefined
console.log(null == undefined); // true (igualdade solta)
console.log(null === undefined); // false (igualdade estrita)