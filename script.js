//Minha solução para o exercício proposto. 

const imagens = document.querySelectorAll('.imagem');
const botoes = document.querySelectorAll('.botao');

function removerClasseImagens() {
    imagens.forEach(imagem => {
        imagem.classList.remove('ativa')
    });
}

function removerClasseBotoes() {
    botoes.forEach(botao => {
        botao.classList.remove('selecionado')
    });
}

botoes.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        removerClasseBotoes();
        removerClasseImagens();

        imagens[index].classList.add('ativa');
        botoes[index].classList.add('selecionado');
    })
})



