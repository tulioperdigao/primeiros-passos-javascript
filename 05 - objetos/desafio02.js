class Pessoa {
    nome;
    peso;
    altura;
    imc;

    constructor(nome, peso, altura, imc) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = imc;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    analisarIMC(){
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc < 25) {
            return ('Peso normal');
        } else if (imc < 30) {
            return ('Acima do peso');
        } else if (imc < 40) {
            return ('Obeso');
        } else {
            return ('Obesidade Grave');
        }
    }
}

const p1 = new Pessoa('José', 120, 1.65);
console.log(`O IMC de ${p1.nome} é de ${p1.calcularIMC()} e consta que o estado dele é: ${p1.analisarIMC()}.`);

const p2 = new Pessoa('Tulio', 70, 1.65);
console.log(`O IMC de ${p2.nome} é de ${p2.calcularIMC()} e consta que o estado dele é: ${p2.analisarIMC()}.`);

const p3 = new Pessoa('Bruna', 60, 1.55);
console.log(`O IMC de ${p3.nome} é de ${p3.calcularIMC()} e consta que o estado dele é: ${p3.analisarIMC()}.`);