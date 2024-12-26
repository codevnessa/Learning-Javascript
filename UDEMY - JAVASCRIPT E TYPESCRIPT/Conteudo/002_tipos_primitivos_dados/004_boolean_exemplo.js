/**
 * Resumo: Este código mostra como usar valores booleanos (true e false) em operações condicionais e lógicas.
 * Uso prático: Use booleanos para controlar o fluxo de execução do código, como em declarações if, loops, etc.
 */

// Valores booleanos
let estaChovendo = true;
let estaEnsolarado = false;
console.log(estaChovendo); // true
console.log(estaEnsolarado); // false

// Operações lógicas
let temGuardaChuva = true;
let vouMolhar = estaChovendo && !temGuardaChuva;
console.log(vouMolhar); // false

// Uso em condicionais
if (estaChovendo) {
    console.log("Leve um guarda-chuva!");
} else {
    console.log("Não precisa de guarda-chuva.");
}