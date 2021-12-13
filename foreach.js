const lista = ['carro', 'bola', 'caneta', 'mouse', 'paralelepípedo']



const buscaMaiorQue4 = function (elemento, indice) {
    let numero = 0
    let str = ''
    str = elemento
    numero = str.length
    if (numero > 5) {
        console.log(`Tem mais que cinco caracteres o elemento "${elemento}" do índice "${indice}"`)
    }
}


lista.forEach(buscaMaiorQue4)

