class pessoa {
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);   
    }
}

const tulio = new pessoa();
tulio.nome = 'Tulio P Castro';
tulio.idade = 20;

const bruna = new pessoa();
bruna.nome = 'Bruna Eduarda';
bruna.idade = 27;

tulio.descrever();
bruna.descrever();
