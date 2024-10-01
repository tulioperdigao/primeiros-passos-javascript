function incrementarJuros(valor, percentual) {
    const juros = (percentual / 100) * valor;
    return valor + juros;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));