var Homem = function(nome, idade){
    this.nome = nome
    this.idade = idade
    this.sexo = 'masculino'
}

var joao = new Homem('João', 18)
console.log(joao)

var pedro ={}
Homem.call(pedro, 'Pedro', 20)
console.log(pedro)