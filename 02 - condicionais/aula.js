const numero = 5; // = para atribuição

const numeroDivisivelPor5 = (numero % 5) === 0; // == igualdade (ignora o tipo da variável)

//condicionais tem que

if (numero === 0) {
    console.log ('Número inserido é inválido');
}

else if (numero === 5) {
    console.log('Número inválido');
}

else if (numeroDivisivelPor5) {
    console.log('Sim');
}

else {
    console.log('Não');
}