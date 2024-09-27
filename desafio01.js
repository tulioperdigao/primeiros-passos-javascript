/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do combustível;
2- Gasto médio de combustível do carro por KM;
3- Distância em KM da viegem;

*/

const preco = 5.79;
const gastoMedio = 10;
let distancia = 100;
let valorViagem = (distancia/gastoMedio) * preco;

console.log(valorViagem.toFixed(2));