/**
 * Resumo: Este código mostra como criar e usar símbolos, que são identificadores únicos e imutáveis.
 * Uso prático: Use símbolos para criar propriedades de objetos únicas ou para evitar colisões de nomes.
 */

// Criando um símbolo
const id = Symbol('id');
console.log(id); // Symbol(id)

// Símbolos são únicos
const outroId = Symbol('id');
console.log(id === outroId); // false

// Usando símbolos como propriedades de objetos
const usuario = {
    nome: "João",
    [id]: 123
};
console.log(usuario); // { nome: "João", [Symbol(id)]: 123 }

// Acessando propriedades com símbolos
console.log(usuario[id]); // 123