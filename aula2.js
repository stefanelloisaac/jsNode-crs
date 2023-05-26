const vetor = [12, "string", false, 8.2]; //aceita qualquer formato de dado

const vetorEstatico = new Array(1000); //cria um vetor com 1000 espaços vazios

const vetorVazio = [];
vetorVazio.push(2); //adiciona de um a um, em sequencia
vetorVazio.unshift(5); //adiciona na primeira posição do array
vetorVazio.pop(); //deleta a ultima posicao
vetorVazio.splice(2, 1); //tira o que vem depois da posição 2, pode definir quantos ou entao todos
vetorVazio.slice(); //clona posições pre definidas
vetorVazio.includes(); //verifica se existe o valor dentro do array

const teste = vetor.concat(vetorVazio); //concatena vetores ou itens
console.log(teste);

function consoleLog(item) {
  return console.log(item);
}

vetorVazio.forEach(consoleLog()); //para cada pos do vetor, executa a função de callback

vetorVazio.forEach((item, i) =>
  console.log(`O número: ${item}, está na posição: ${i}"`)
);

const vetorDividido = vetorVazio.map((item, i) => {
  let resultado = item / 2;
  return `O resultado ${resultado} está na posição ${i}`;
});
console.log(vetorDividido);

const vetorFiltrado = vetorVazio.filter((item) => item < 10);
console.log(vetorFiltrado)

const soma = vetorVazio.reduce((soma=0, item) => soma += item);

const index = vetorVazio.findIndex((item => item === 4)); //acha o index do primeiro valor correspendente
vetorVazio.find() //encontra o primeiro valor ou numero <10 por exemplo

const resultado = vetorVazio.join(' '); //junta conforme o separador
console.log(resultado)

const quebrado = "o goro é maluco"
const vetorTexto = texto.split(' ')
console.log(vetorTexto)



