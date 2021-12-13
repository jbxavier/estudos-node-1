var contador = function () {
    // encapsulado, não pode ser acessado pelo contador fora do escopo
    let count = 0 

    let incrementa = function(){
        return ++count
    }
    let decrementa = function(){
        return --count
    }
    let mostraContador = function(){
        return count
    }

    // torna as funções públicas
    return {
        incrementa: incrementa,
        decrementa: decrementa,
        mostraContador: mostraContador
    }
}


let conta = contador()
conta.incrementa()
conta.incrementa()
conta.incrementa()
conta.decrementa()
console.log(conta.mostraContador())