var produto = {nome: 'sapato', preco: 150}
var taxa = 0.1

var calculaImposto = function (preco, taxa) {
    return preco * taxa
}

var calculaPreco = function (produto, calculaImposto){
    return produto.preco + calculaImposto(produto.preco, taxa)
}

let precoComImposto = calculaPreco(produto, calculaImposto)

console.log(precoComImposto)