// 1 - Filtrar os valores pares:
// vetorAtividade = [2, 4, 7, -2, 1, 1000000, 44, 33, 51]

const vetorAtividade = [2, 4, 7, -2, 1, 1000000, 44, 33, 51];

const vetorFiltrado = vetorAtividade.filter((item) => item % 2 === 0);
console.log(vetorFiltrado);
