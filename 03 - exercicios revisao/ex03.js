const precoProduto = 100;
let parcelas = 10;
let formaDePagamento = 'parcelado';
const descontoDebito = precoProduto * 0.10;
const descontoDinheiroOuPix = precoProduto * 0.15;
const parceladoMaisVezes = (parcelas - 2) * (precoProduto * 0.10);

let valorPagoDebito = precoProduto - descontoDebito;
let valorPagoDinheiroOuPix = precoProduto - descontoDinheiroOuPix;
let valorPagoVariasParcelas = precoProduto + parceladoMaisVezes;

console.log('Valor de etiqueta:');
console.log(precoProduto);
console.log('----------------------')

if (formaDePagamento === 'debito') {
    console.log('Valor final:');
    console.log(valorPagoDebito);
}

else if (formaDePagamento === 'PIX' || formaDePagamento === 'dinheiro') {
    console.log('Valor final:');
    console.log(valorPagoDinheiroOuPix);
}

else if (parcelas <= 2 && formaDePagamento === 'parcelado') {
    console.log('Valor final:');
    console.log(precoProduto);
}

else if (parcelas > 2 && formaDePagamento === 'parcelado') {
    console.log('Valor final:');
    console.log(valorPagoVariasParcelas);
}

else {
    console.log('Número de parcelas ou forma de pagamento inválido.')
}
