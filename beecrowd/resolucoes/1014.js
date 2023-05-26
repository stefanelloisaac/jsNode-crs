var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
// let [a, b] = pegarValores(lines.shift());
// let [d, e, f] = pegarValores(lines.shift());

// let primeiroVetor = pegarValores(lines.shift());

let a = Number(lines.shift())
let b = Number(lines.shift())

let consumo = a/b

console.log(`${consumo.toFixed(3)} km/l`)