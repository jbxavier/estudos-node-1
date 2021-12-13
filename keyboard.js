process.stdin.on('readable', function(){
    var chunk = process.stdin.read()
    console.log(chunk)
})