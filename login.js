const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (nome.value.trim() === '') {
        erroNome.textContent = 'O nome é obrigatório';
        return;
    } else {
        erroNome.textContent = '';
    }

    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (email.value.trim() === '' ) {
        erroEmail.textContent = 'O email é obrigatório.';
        return;
    } else {
        erroEmail.textContent = '';
    }

    if (senha.value.trim() === '') {
        erroSenha.textContent = 'A senha é obrigatória';
        return;
    } else {
        erroSenha.textContent = '';
    }
})