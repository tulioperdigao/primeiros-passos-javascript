const entrada = [5.5, 8.0]
let i = 0


function gets() {
    const valor = entrada[i]
    i++
    return valor
}

function print(texto) {
    console.log(texto)
}

module.exports = {gets, print}