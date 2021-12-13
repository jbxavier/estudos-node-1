var options = [
    'a) pid',
    'b) title',
    'c) arch',
    'd) platform'
]
showOptions = function() {
    options.forEach(itemVetor => console.log(itemVetor))
}

// assim funciona
module.exports = { showOptions }

