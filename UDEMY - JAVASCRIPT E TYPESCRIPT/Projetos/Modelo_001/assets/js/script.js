// Selecionar o formulário
const form = document.querySelector('form');

// Função para exibir mensagens de erro
function mostrarErro(campo, mensagem) {
    const erro = document.createElement('div');
    erro.className = 'erro';
    erro.textContent = mensagem;
    campo.parentNode.insertBefore(erro, campo.nextSibling);
}

// Função para limpar mensagens de erro
function limparErros() {
    const erros = document.querySelectorAll('.erro');
    erros.forEach(erro => erro.remove());
}

// Função para validar o formulário
function validarFormulario(event) {
    event.preventDefault(); // Impedir o envio do formulário

    limparErros(); // Limpar erros anteriores

    // Selecionar os campos
    const nome = document.getElementById('nome');
    const numero = document.getElementById('numero');
    const email = document.getElementById('email');
    const senha = document.getElementById('senha');

    let valido = true;

    // Validar nome
    if (nome.value.trim() === '') {
        mostrarErro(nome, 'Por favor, insira seu nome.');
        valido = false;
    }

    // Validar número
    if (numero.value.trim() === '') {
        mostrarErro(numero, 'Por favor, insira seu número.');
        valido = false;
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        mostrarErro(email, 'Por favor, insira um email válido.');
        valido = false;
    }

    // Validar senha
    if (senha.value.trim().length < 6) {
        mostrarErro(senha, 'A senha deve ter pelo menos 6 caracteres.');
        valido = false;
    }

    // Se o formulário for válido, exibir mensagem de sucesso
    if (valido) {
        alert('Formulário enviado com sucesso!');
        form.reset(); // Limpar o formulário
    }
}

// Adicionar evento de submit ao formulário
form.addEventListener('submit', validarFormulario);