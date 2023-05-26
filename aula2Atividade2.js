//2 - com o mesmo vetor, remapealo a fim de criar um novo vetor cujo tenha o texto numero: <>, posição <>

const vetorAtividade = [2, 4, 7, -2, 1, 1000000, 44, 33, 51];

const vetorDividido = vetorAtividade.map((item, i) => {
  return `O resultado ${item} está na posição ${i}`;
});
console.log(vetorDividido);
