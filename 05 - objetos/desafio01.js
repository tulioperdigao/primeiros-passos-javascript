class Carro {
    marca;
    cor;
    gastoMedio;

    constructor(marca, cor, gastoMedio) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedio = gastoMedio;
    }

    calcularCusto (distancia, preco) {
        return distancia * this.gastoMedio * preco;
    }
}

const uno = new Carro('Fiat', 'Preto', 1/12);
const palio = new Carro('Fiat', 'Prata', 1/10);

console.log(uno.calcularCusto(70, 5));
console.log(palio.calcularCusto(70, 5));