console.time('T')
console.log('A '+ new Date())

setTimeout(function(){
    console.log('B '+ new Date())
    console.timeEnd('T')
}, 2000)


