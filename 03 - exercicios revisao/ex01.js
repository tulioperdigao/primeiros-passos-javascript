const nota1 = 7;
const nota2 = 7;
const nota3 = 7;

let media = (nota1 + nota2 + nota3) / 3;

if (media < 5) {
    console.log('REPROVADO!');
}

else if (media < 7) {
    console.log('RECUPERAÇÃO!');
}

else {
    console.log('APROVADO!');
}