const livros = require("./listaLivros");
const menorValor = require("./menorValor");

for (let atual = 0; atual < livros.length - 1; atual++) {
    let menor = menorValor(livros, atual);

    let livroAtual = livros[atual]; //pego o objeto do livro na posicao atual
    console.log('posição atual ',atual);
    console.log('livro atual', livros[atual]);
    let livroMenorPreco = livros[menor]; //pego o objeto do livro com o menor preco
    console.log('livro menor preço', livros[menor]);

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual; //é uma "dança das cadeiras", troco a posição dos objetos
}

console.log(livros);