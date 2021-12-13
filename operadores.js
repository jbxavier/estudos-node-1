/*
    Quando não passamos valores  no parâmetro, null, undefined, 0, ""(vazio...) são identificados como falso. Ao comparar-mos max || 1000 garantimos que se a primeira condição for false assume o 1000 como valor válido!
    Assim reduzimos um if (max === undefined || max === null || max === 0) para uma simples condição como a definida na função abaixo!
*/
var generateSerial= function(max){
    max = max || 1000
    return Math.floor(Math.random() * max)
}

console.log(generateSerial(1000))
console.log(generateSerial())