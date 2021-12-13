const homem = { sexo: 'Masculino'}

// uma forma de fazer
const joao = { nome: 'João', idade: 20}
Object.setPrototypeOf(joao, homem)

// outra forma de fazer
const pedro = Object.create(homem)
pedro.nome = 'Pedro'
pedro.idade = 18

// imprime joao
console.log(joao)
console.log(joao.sexo)
// imprime pedro
console.log(pedro)
console.log(pedro.sexo)

// trabalhando com object - keys não trouxe propriedade
// do protótipo homem que joao herda...
console.log(Object.keys(joao))
// for in que percorre propriedades em objetos busca inclusive
// as propriedades herdadas, por isso imprime sexo herdado do obj homem
for (let propriedade in joao){
    console.log(propriedade)
}