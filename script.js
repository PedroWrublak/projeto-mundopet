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