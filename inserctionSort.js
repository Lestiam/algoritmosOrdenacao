const livros = require('./listaLivros');

function insertionSort(lista) {
    
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual; //item que está sendo analisado por vez
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco ) { //quando a posição analise/atualo for meior que zero E quando o valor do item que estou analisando for MENOR do que vem antes
            let itemAnalise = lista[analise]; //pego o objeto da lista na posicao atual
            let itemAnterior = lista[analise - 1]; //pego o objeto do livro com o menor preco
            
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise; //é uma "dança das cadeiras", troco a posição dos objetos

            analise --; //decremento a posicao do item que estou analisando
        }
    }    
    console.log(lista);
}

insertionSort(livros);