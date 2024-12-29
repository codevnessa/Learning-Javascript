/*
Descrição:
Funções assíncronas permitem trabalhar com operações que levam tempo, 
como buscar dados de um servidor. Elas usam "async" e "await".
*/

// Definindo uma função assíncrona
async function buscarDados() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados recebidos!"), 2000); // Simula uma espera de 2 segundos
    });
}

// Usando "await" para esperar a conclusão da função assíncrona
(async function() {
    const dados = await buscarDados();
    console.log(dados); // Resultado: "Dados recebidos!" após 2 segundos
})();