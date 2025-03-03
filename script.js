const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener('click', () => {
    inputUpload.click();
})

function lerConteudoDoArquivo(arquivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve({url: reader.result, nome: arquivo.name})
        }
        reader.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }

        reader.readAsDataURL(arquivo)
    })
}

const imagemPrincipal = document.querySelector(".main-image");
const nomeDaImagem = document.querySelector(".container-imagem-nome p");

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoArquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome
        } catch (erro){
            console.error("Erro na leitura do arquivo")
        }
    }
})

// Filtrar gatos por cor

function filtrarGatosPorCor (listaDeGatos, corDesejada) {
    return listaDeGatos.filter(gato => gato.cor === corDesejada);
}

let listaDeGatos = [
    {nome: 'Astolfo', cor: 'laranja'},
    {nome: 'Arnold', cor: 'preto'},
    {nome: 'Rivaldo', cor: 'branco'},
    {nome: 'Xavier', cor: 'laranja'}
];

const inputTags = document.getElementById("input-tags");
const tagList = document.getElementById("tag-list");

document.addEventListener('DOMContentLoaded', () => {
    
    
    tagList.addEventListener("click", (event) => {
        if (event.target.classList.contains("remove-tag")) {
            const removedTag = event.target.parentElement;
            tagList.removeChild(removedTag);
        }
    })
    
    const avaibleHashtags = ["Laranja", "Amarelo", "Preto", "Branco", "Marrom", "Siamês"]
    
    
    async function verifyAvaibleHashtags (tagText) {
        return new Promise((resolve => {
            setTimeout(() => {
                resolve(avaibleHashtags.includes(tagText))
            }, 1000)
        }))
    }

    inputTags.addEventListener("keypress", async (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const tagText = inputTags.value.trim(); //remove os espaços em branco antes e depois da palavra
            if (tagText !== "") {
                try {
                    const existTag = await verifyAvaibleHashtags(tagText)
                    if (existTag) {
                        const newTag = document.createElement("li");
                        newTag.innerHTML = `<p>${tagText}</p> <img src="./img/close-black.svg" class="remove-tag">`;
                        tagList.appendChild(newTag);
                        inputTags.value = "";
                    } else {
                        alert("A tag não foi encontrada.");
                    }
                } catch (error) {
                    console.error("Erro ao verificar a existência da tag");
                    alert("Erro ao verificar a existência da tag. Verifique o console.")
                }

            }
        }
    })
    const publishBtn = document.querySelector(".btn-publicar");
    
    async function publishProject (projectName, projectDescription, projectTags) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const itWorked = Math.random() > 0.5; // Funcionalidade baseada na sorte, não faz parte do projeto
    
                if (itWorked) {
                    resolve("Projeto publicado com sucesso.");
                } else {
                    reject("Erro ao publicar o projeto");
                }
    
            }, 1000)
        })
    }
    
    publishBtn.addEventListener("click", async (event) => {
        event.preventDefault();
        const projectName = document.getElementById("nome").value;
        const projectDescription = document.getElementById("descricao").value;
        const projectTags = Array.from(tagList.querySelectorAll("p")).map((tag) => tag.textContent);
        
        if (projectName == "" || projectDescription == "") {
            alert("O nome e a descrição projeto do são obrigatórios.");
        } else if (projectTags == "") {
            alert("Adicione pelo menos uma Hashtag.");
        } else {
         try {
            const mensage = await publishProject (projectName, projectDescription, projectTags);
            alert(mensage);
        } catch (error) {
            console.error(error);
            alert(error);
        }   
        }
        
        
    })
})

const descartBtn = document.querySelector(".btn-descartar");

descartBtn.addEventListener("click", (event) => {
    event.preventDefault();

    const form = document.querySelector("form");
    form.reset();

    imagemPrincipal.src = "./img/imagem1.jpeg";
    nomeDaImagem.textContent = "imagem1.jpeg"

    tagList.innerHTML = "";
})
