// Espera a página carregar completamente antes de rodar o código
document.addEventListener('DOMContentLoaded', function () {
    // Pega o formulário, a área de resultado e os elementos onde o IMC e a classificação vão aparecer
    const form = document.querySelector('.form'); // Seleciona o formulário com a classe .form
    const resultado = document.querySelector('.resultado'); // Seleciona a área de resultado
    const imcResultado = document.getElementById('imcResultado'); // Seleciona o elemento que exibirá o valor do IMC
    const imcClassificacao = document.getElementById('imcClassificacao'); // Seleciona o elemento que exibirá a classificação do IMC
    const pessoas = []; // Cria um array vazio para armazenar os dados das pessoas

    // Se o formulário não for encontrado, mostra um erro no console e interrompe a execução
    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }

    // Função para calcular o IMC (peso dividido pela altura ao quadrado)
    function calcularIMC(peso, altura) {
        return peso / (altura * altura); // Retorna o valor do IMC
    }

    // Função para classificar o IMC em categorias (abaixo do peso, normal, etc.)
    function classificarIMC(imc) {
        if (imc < 18.5) return { classificacao: "Abaixo do peso", classe: "abaixo-peso" }; // Se o IMC for menor que 18.5, retorna "Abaixo do peso"
        if (imc >= 18.5 && imc < 24.9) return { classificacao: "Peso ideal", classe: "normal" }; // Se o IMC estiver entre 18.5 e 24.9, retorna "Peso ideal"
        if (imc >= 25 && imc < 29.9) return { classificacao: "Sobrepeso", classe: "sobrepeso" }; // Se o IMC estiver entre 25 e 29.9, retorna "Sobrepeso"
        return { classificacao: "Obesidade", classe: "obesidade" }; // Se o IMC for 30 ou mais, retorna "Obesidade"
    }

    // Função para mostrar o resultado do IMC na tela
    function exibirResultado(imc, classificacao, classe) {
        imcResultado.textContent = imc.toFixed(2); // Exibe o valor do IMC com 2 casas decimais
        imcClassificacao.textContent = classificacao; // Exibe a classificação do IMC
        imcResultado.className = classe; // Aplica a classe CSS correspondente (para mudar a cor do texto)
    }

    // Função para limpar o formulário e os resultados
    function resetarFormulario() {
        form.reset(); // Reseta todos os campos do formulário
        imcResultado.textContent = ''; // Limpa o valor do IMC exibido
        imcClassificacao.textContent = ''; // Limpa a classificação exibida
        imcResultado.className = ''; // Remove a classe CSS aplicada
    }

    // Função para resetar tudo (formulário e a lista de pessoas)
    function resetarTudo() {
        resetarFormulario(); // Chama a função para resetar o formulário
        pessoas.length = 0; // Limpa o array de pessoas
        console.log("Array de pessoas foi resetado:", pessoas); // Mostra no console que o array foi limpo
    }

    // Quando o formulário for enviado (clicar no botão "Calcular IMC")
    form.addEventListener('submit', function (evento) {
        evento.preventDefault(); // Impede a página de recarregar ao enviar o formulário

        // Pega os valores digitados nos campos do formulário
        const nome = form.querySelector('.nome').value.trim(); // Obtém o valor do campo "nome" e remove espaços em branco no início e no final
        const sobrenome = form.querySelector('.sobrenome').value.trim(); // Obtém o valor do campo "sobrenome" e remove espaços em branco
        const peso = parseFloat(form.querySelector('.peso').value); // Obtém o valor do campo "peso" e converte para número
        const altura = parseFloat(form.querySelector('.altura').value); // Obtém o valor do campo "altura" e converte para número

        // Valida os dados: nome e sobrenome não podem estar vazios, peso e altura devem ser números válidos
        if (!nome || !sobrenome) {
            alert("Por favor, insira seu nome e sobrenome."); // Mostra um alerta se o nome ou sobrenome estiverem vazios
            return;
        }
        if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
            alert("Por favor, insira valores válidos para peso e altura."); // Mostra um alerta se o peso ou altura forem inválidos
            return;
        }

        // Calcula o IMC usando a função que criamos
        const imc = calcularIMC(peso, altura);

        // Classifica o IMC (abaixo do peso, normal, etc.)
        const { classificacao, classe } = classificarIMC(imc);

        // Guarda os dados da pessoa no array "pessoas"
        pessoas.push({ nome, sobrenome, peso, altura, imc });

        // Mostra o resultado do IMC na tela
        exibirResultado(imc, classificacao, classe);

        // Mostra algumas informações no console para ajudar a depurar (ver se está tudo funcionando)
        console.log("IMC calculado:", imc);
        console.log("Classe aplicada:", classe);
        console.log("Pessoas cadastradas:", pessoas);
    });

    // Quando clicar no botão "Resetar Formulário", chama a função para limpar o formulário
    document.getElementById('resetFormButton').addEventListener('click', resetarFormulario);

    // Quando clicar no botão "Resetar Tudo", chama a função para limpar tudo
    document.getElementById('resetAllButton').addEventListener('click', resetarTudo);
});