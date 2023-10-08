const livros = require("./listaLivros");

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;
    
    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        //codigo
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato; //retorna o valor do mais barato
}


module.exports = menorValor; //serve para exportar