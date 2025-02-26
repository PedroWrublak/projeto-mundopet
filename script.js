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

document.addEventListener('DOMContentLoaded', () => {
    const inputTags = document.getElementById("input-tags");
    const tagList = document.getElementById("tag-list");
    
    
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
})
