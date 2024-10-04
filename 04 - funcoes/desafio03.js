function escreveNome(nome) {
    return nome;
}

function verificarIdade(idade) {
    if (idade < 18) {
        console.log(escreveNome('Tulio') + ' é menor de idade.');
    }

    else {
        console.log(escreveNome('Tulio') + ' é maior de idade.');
    }
}

verificarIdade(18);