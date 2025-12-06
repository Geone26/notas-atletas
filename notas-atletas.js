// notas-atletas.js

// Dados de entrada
let atletas = [
    {
        nome: "Cesar Abascal",
        notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
        nome: "Fernando Puntel",
        notas: [8, 10, 10, 7, 9.33]
    },
    {
        nome: "Daiane Jelinsky",
        notas: [7, 10, 9.5, 9.5, 8]
    },
    {
        nome: "Bruno Castro",
        notas: [10, 10, 10, 9, 9.5]
    }
];

function calcularMedias(atletas) {
    for (let i = 0; i < atletas.length; i++) {
        const atleta = atletas[i];

        // copia o array para não alterar o original
        let notas = atleta.notas.slice();

        // ordena como string (igual fizeram no enunciado)
        notas = notas.sort();

        // elimina a menor (posição 0) e a maior (última posição)
        let notasComputadas = notas.slice(1, notas.length - 1);

        // soma das notas computadas
        let soma = 0;
        notasComputadas.forEach(nota => {
            soma += Number(nota);
        });

        // média
        let media = soma / notasComputadas.length;

        console.log(`Atleta: ${atleta.nome}`);
        console.log(`Notas Obtidas: ${notas.join(",")}`);
        console.log(`Média Válida: ${media}`);
        console.log(""); // linha em branco
    }
}

calcularMedias(atletas);
