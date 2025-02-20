const uploadBtn = document.getElementById("upload-btn");
const inputUpload = document.getElementById("image-upload");

uploadBtn.addEventListener('click', () => {
    inputUpload.click();
})

function lerConteudoDoarquivo(arquivo) {
    return new Promise ((resolve, reject) => {
        const reader = new FileReader();
        leitor.onload = () => {
            resolve({url: reader.result, nome: arquivo.name})
        }
        leitor.onerror = () => {
            reject(`Erro na leitura do arquivo ${arquivo.name}`)
        }
    })
}

const imagemPrincipal = document.querySelector("main-image");
const nomeDaImagem = document.querySelector("container-imagem-name p");

inputUpload.addEventListener("change", async (evento) => {
    const arquivo = evento.target.files[0];

    if(arquivo) {
        try {
            const conteudoDoArquivo = await lerConteudoDoarquivo(arquivo);
            imagemPrincipal.src = conteudoDoArquivo.url;
            nomeDaImagem.textContent = conteudoDoArquivo.nome
        } catch(erro){
            console.error("Erro na leitura do aqruivo")
        }
    }
})