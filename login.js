const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const erroNome = document.getElementById('erro-nome');
const erroEmail = document.getElementById('erro-email');
const erroSenha = document.getElementById('erro-senha');

const avaibleName = ["Exemplonome", "Exemplonome2", "Exemplonome3"]
const avaibleEmails = ["exemploemail@gmail.com", "exemploemail2@gmail.com", "exemploemail3@gmail.com"]

async function verifyName (name) {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(avaibleName.includes(name));
        })
    }, 100)
}

async function verifYEmail (email) {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(avaibleEmails.includes(email));
        })
    }, 2000)
}

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const nameText = nome.value;
    const emailText = email.value;


    const existName = await verifyName(nameText);
    const existEmail = await verifYEmail(emailText);

    if (nome.value.trim() === '') {
        erroNome.textContent = 'O nome é obrigatório';
        return;
    } else {
        try {
            if (existName) {
                alert("Esse nome de usuário já existe.")
            }
            erroNome.textContent = '';
        } catch (error) {
            console.error("Erro ao verificar a existência do nome.")
            alert("Erro ao verificar a existência do email. Verifique o console.")
        }
    }
    
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (email.value.trim() === '' ) {
        erroEmail.textContent = 'O email é obrigatório.';
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
    erroEmail.textContent = '';
}

if (senha.value.trim() === '') {
    erroSenha.textContent = 'A senha é obrigatória';
    return;
} else {
    erroSenha.textContent = '';
}

if (!existEmail && !existName) {
    alert("Cadastro realizado com sucesso.")
}
})

// Somente ao deixar de selecionar o input do email
// O erro escrito na tela que diz se o email e o nome de usuário estão disponíveis, ou não, poderia ter sido feito com uma function

email.addEventListener("blur", async function (event) {

    async function verifYEmail (email) {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve(avaibleEmails.includes(email));
            })
        }, 2000)
    }
    
    const emailText = email.value;
    const existEmail = await verifYEmail(emailText);

    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
    if (email.value.trim() === '' ) {
        erroEmail.textContent = 'O email é obrigatório.';
        return;
    } else {
        try {
            if(existEmail) {
                alert("Esse email já está sendo utilizado.");
            } else {
                erroEmail.textContent = 'Email disponível';
                erroEmail.style.color = 'green';
                return
            }
    } catch (error) {
        console.error("Erro ao verificar a existência do email.");
        alert("Erro ao verificar a existência do email. Verifique o console.");
    }
    erroEmail.textContent = '';
}
})

nome.addEventListener("blur", async function (event) {

    async function verifyName (name) {
        return new Promise((resolve) => {
            setTimeout (() => {
                resolve(avaibleName.includes(name));
            })
        }, 2000)
    }
    
    const nameText = email.value;
    const existName = await verifyName(nameText);

    if (nome.value.trim() === '' ) {
        erroNome.textContent = 'O email é obrigatório.';
        return;
    } else {
        try {
            if(existName) {
                alert("Esse nome de usuário já está sendo utilizado.");
            } else {
                erroNome.textContent = 'Nome de usuário disponível';
                erroNome.style.color = 'green';
                return;
            }
    } catch (error) {
        console.error("Erro ao verificar a existência do nome de usuário.");
        alert("Erro ao verificar a existência do nome de usuário. Verifique o console.");
    }
    erroNome.textContent = '';
}
})