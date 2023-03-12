//Minha solução para o exercício proposto. 

/*const imagens = document.querySelectorAll('.imagem');
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
})*/

//Solução dos professores DevEmDobro

//alert('Hello World'); //vericando a funcionalidade do Javascript.

/*
Objetivo - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

- passo 1 - dar um jeito de pegar o elemento HTML dos botões;
- passo 2 - dar um jeito de identificar o clique do usuário no botão;
- passo 3 - desmarcar o botão selecionado anterior;
- passo 4 - marcar o botão clicado como se estivesse selecionado;
- passo 5 - esconder a imagem anterior;
- passo 6 - fazer aparecer a imagem correspondente ao botão clicado;
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões:
const botoesCarrossel = document.querySelectorAll('.botao');
const imagensCarrossel = document.querySelectorAll('.imagem');

// - passo 2 - dar um jeito de identificar o clique do usuário no botão:
botoesCarrossel.forEach((botao, index) => {
    botao.addEventListener('click', () => {
        //- passo 3 - desmarcar o botão selecionado anterior:
        desativarBotaoSelecionado();

        //- passo 4 - marcar o botão clicado como se estivesse selecionado:
        selecionarBotaoDoCarrossel(botao);

        //- passo 5 - esconder a imagem ativa de fundo:
        esconderImagemAtiva();

        //- passo 6 - fazer aparecer a imagem correspondente ao botão clicado:
        mostrarImagemDeFundo(index);
    })
})

function mostrarImagemDeFundo(index) {
    imagensCarrossel[index].classList.add('ativa');
}

function selecionarBotaoDoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

