var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
let [a, b] = pegarValores(lines.shift());
let [c, d] = pegarValores(lines.shift());

let dist = Math.sqrt(Math.pow(c-a,2) + Math.pow(d-b,2));



console.log(`${dist.toFixed(4)}`)