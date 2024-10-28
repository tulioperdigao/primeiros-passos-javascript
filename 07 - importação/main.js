
const {gets, print} = require('./funcoes-auxiliares');
let maior = 0
const quantidadeDeAlunos = gets()


for (let i = 0; i < quantidadeDeAlunos; i++) {
    const numero = gets();
    if (numero > maior) {
        maior = numero
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