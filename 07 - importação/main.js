
const {gets, print} = require('./funcoes-auxiliares');
const numerosSorteados = []
let maior = 0

for (let i = 0; i < 5; i++) {
    const numero = gets();
    numerosSorteados.push(numero)
    
}

for (let i = 0; i < numerosSorteados.length; i++) {
    if (numerosSorteados[i] > maior) {
        maior = numerosSorteados[i]
    }
    
}

print(maior)

/*
const pessoa = {
    nome: 'Tulio'
}

const { nome } = pessoa;

const nome = pessoa.nome;
*/