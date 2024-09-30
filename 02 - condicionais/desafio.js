/* 

Faça um progreama para calcular o valor de uma viagem.
   
Você terá 3 variáveis. Sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível que está no seu carro;

TODO -
1 - Gasto médio de combustível do carro por KM;
2 - Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar esta viagem

*/

const etanol = 3.50;
const gasolina = 5.23;
let tipoCombustivel = 'gasolina';
let KmPorLitro = 10;
let distanciaEmKm = 200;

let combustivelGasto = (distanciaEmKm / KmPorLitro);
let valorGasto = 0;

if (tipoCombustivel === 'gasolina') {
    valorGasto = combustivelGasto * gasolina;
    console.log(valorGasto.toFixed(2));
}

else if (tipoCombustivel === 'etanol') {
    valorGasto = combustivelGasto * etanol;
    console.log(valorGasto.toFixed(2));
}

else {
    console.log('Combustível Inválido');
}