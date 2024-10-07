class pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);   
    }
}

const tulio = new pessoa('Tulio', 20);

const bruna = new pessoa('Bruna', 27);

console.log(tulio);
console.log(bruna);
