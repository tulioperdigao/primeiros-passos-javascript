const notas = [];
let soma = 0;

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(10);
notas.push(5);
notas.push(8);

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;  
}

const media = soma / notas.length
console.log(media);