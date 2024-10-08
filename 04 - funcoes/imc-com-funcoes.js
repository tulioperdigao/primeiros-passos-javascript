function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc < 25) {
        return 'Peso normal';
    } else if (imc < 30) {
        return 'Acima do peso';
    } else if (imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade Grave';
    }
}

(function () {
    const peso = 110;
    const altura = 1.65;
    const imc = calcularImc(peso, altura);

    console.log(imc)
    console.log(classificarImc(imc));
})();