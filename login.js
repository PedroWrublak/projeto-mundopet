const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');

const avaibleEmails = ["exemploemail@gmail.com", "exemploemail2@gmail.com", "exemploemail3@gmail.com"]
const avaibleName = ["Exemplonome", "Exemplonome2", "Exemplonome3"]
    
async function verifYEmail (email) {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(avaibleEmails.includes(email));
        })
    }, 2000)
}

async function verifyName (name) {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(avaibleName.includes(name));
        })
    }, 100)
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const emailText = email.value;
    const nameText = nome.value;


    const existEmail = await verifYEmail(emailText);
    const existName = await verifyName(nameText);

    if (nome.value.trim() === '') {
        erroNome.textContent = 'O nome é obrigatório';
        return;
    } else {
        try {
            if(existEmail) {
                alert("Esse email já está sendo utilizado.")
            }
        } catch (error) {
            console.error("Erro ao verificar a existência do email.")
            alert("Erro ao verificar a existência do email. Verifique o console.")
        }
        erroNome.textContent = '';
    }

    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (email.value.trim() === '' ) {
        erroEmail.textContent = 'O email é obrigatório.';
        return;
    } else {
        try {
            if (existName) {
                alert("Esse nome de usuário já existe.")
            }
        } catch (error) {
            console.error("Erro ao verificar a existência do nome.")
            alert("Erro ao verificar a existência do email. Verifique o console.")
        }
        erroEmail.textContent = '';
    }

    if (!existEmail && !existName) {
        alert("Cadastro realizado com sucesso.")
    }


    if (senha.value.trim() === '') {
        erroSenha.textContent = 'A senha é obrigatória';
        return;
    } else {
        erroSenha.textContent = '';
    }
})