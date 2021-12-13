const helloWord = function (){
    return function(){
        console.log('Hello word')
    }
}

console.log(helloWord)
console.log(helloWord())
console.log(helloWord()())