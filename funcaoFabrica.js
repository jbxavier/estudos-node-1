// Função fábrica
const criarPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    }
}

console.log(criarPessoa('Pedro', 20))
console.log(criarPessoa('Maria', 30))

//Função construtora
const Pessoa = function (nome, idade){
    this.nome = nome,
    this.idade = idade
}

console.log(new Pessoa("Raimundo", 48))
console.log(new Pessoa("Clementina", 58))

// chamando pelo método call 
var mane = {}
Pessoa.call(mane, "Manezinho", 37)
console.log(mane)

var maricota = {}
Pessoa.call(maricota, "Maricotinha", 75)
console.log(maricota)