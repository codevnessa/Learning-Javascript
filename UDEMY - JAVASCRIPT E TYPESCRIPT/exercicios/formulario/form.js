document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const imcResultado = document.getElementById('imcResultado');
    const imcClassificacao = document.getElementById('imcClassificacao');
    const pessoas = [];

    if (!form) {
        console.error("Formulário não encontrado!");
        return;
    }

    form.addEventListener('submit', function (evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = parseFloat(form.querySelector('.peso').value);
        const altura = parseFloat(form.querySelector('.altura').value);

        if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0) {
            alert("Por favor, insira valores válidos para peso e altura.");
            return;
        }

        const imc = peso / (altura * altura);
        pessoas.push({ nome, sobrenome, peso, altura, imc });

        // Atualiza o resultado do IMC
        imcResultado.textContent = imc.toFixed(2);

        // Aplica a classe e a mensagem correspondente ao IMC
        imcResultado.classList.remove('abaixo-peso', 'normal', 'sobrepeso', 'obesidade');
        if (imc < 18.5) {
            imcResultado.classList.add('abaixo-peso');
            imcClassificacao.textContent = "Abaixo do peso";
        } else if (imc >= 18.5 && imc < 24.9) {
            imcResultado.classList.add('normal');
            imcClassificacao.textContent = "Peso ideal";
        } else if (imc >= 25 && imc < 29.9) {
            imcResultado.classList.add('sobrepeso');
            imcClassificacao.textContent = "Sobrepeso";
        } else {
            imcResultado.classList.add('obesidade');
            imcClassificacao.textContent = "Obesidade";
        }

        console.log("IMC calculado:", imc);
        console.log("Classe aplicada:", imcResultado.className);
    });

    document.getElementById('resetFormButton').addEventListener('click', function () {
        form.reset();
    });

    document.getElementById('resetAllButton').addEventListener('click', function () {
        form.reset();
        resultado.innerHTML = '';
        pessoas.length = 0;
        console.log("Array de pessoas foi resetado:", pessoas);
    });
});