const listaCarros = [{marca: 'Ford', modelo: 'Fiesta'}, 
    {marca: 'Ford', modelo: 'Ka'},
    {marca: 'VW', modelo: 'Gol'},
    {marca: 'Chevrolet', modelo: 'Onix'}]

const listaFord = listaCarros.filter((elemento) => elemento.marca === 'Ford')

// verifica se todos os veículos são da marca Ford
const todosFord = listaCarros.every((elemento) => elemento.marca === 'Ford')
console.log(`Todos ford? : ${todosFord}`)

// verifica se algum elemento tem a marca Ford
const algumFord = listaCarros.some((elemento) => elemento.marca === 'Ford')
console.log(`Algum elemento é da marca Ford? : ${algumFord}`)

console.log(`========= Carros "Ford" Filtrados========== \n`)
console.table(listaFord)

// extrair uma array com uma característica dos carros: somente a marca por exemplo...
const retornaMarcas = listaCarros.map(function(cadaCarro){
    return cadaCarro.marca
})

console.log(retornaMarcas)
