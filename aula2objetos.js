// let jogadores =
//   {
//     nome: 'Vinicius Jr',
//     idade: 22,
//     nacionalidade: 'BR',
//     funcao: [
//       {
//         primeira: "LW",
//         segunda: "SA"
//       }
//     ],
//     getNome: () => {
//       console.log(`GOOOOOOOOOL DE ${jogadores[0].nome}!`);
//     }
//   }


// jogadores[0].getNome();

let objeto = {
  nome: 'algo',
  idade: 21
}

// const string = JSON.stringify(objeto); //transforma em strng

// const voltou = JSON.parse(string); //transforma de volta em objeto

// Object.keys(objeto).forEach((chave) => console.log(`A chave ${chave} tem o valor ${objeto[chave]}`))

for (let valor in objeto) {
  // console.log(valor);
}

const valores = Object.values(objeto);
console.log(valores);

