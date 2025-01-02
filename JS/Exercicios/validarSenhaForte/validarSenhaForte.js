function gerarSenhaForte() {
    const maiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const minusculas = 'abcdefghijklmnopqrstuvwxyz';
    const nums = '0123456789';
    const especiais = '!@#$%^&*()_+-=[]{};:,.<>/?';

    const randomChar = (str) => str[Math.floor(Math.random() * str.length)];

    let senha = '';

    senha += randomChar(maiusculas);
    senha += randomChar(minusculas);
    senha += randomChar(nums);
    senha += randomChar(especiais);

    const todosChars = maiusculas + minusculas + nums + especiais;
    for (let i = senha.length; i < 16; i++) {
        senha += randomChar(todosChars);
    }

    senha = senha.split('').sort(() => Math.random() - 0.5).join('');

    return senha;
}

function validarSenhaForte(senha) {
    if (senha.length < 8) return false;
    if (!/[A-Z]/.test(senha)) return false;
    if (!/[a-z]/.test(senha)) return false;
    if (!/[0-9]/.test(senha)) return false;
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(senha)) return false;
    return true;
}

const senha = gerarSenhaForte();
console.log("Senha gerada:", senha);
console.log("Senha válida?", validarSenhaForte(senha));