var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map

let a = 3.14159
let b = Number(Math.pow(lines.shift(), 2))
// let primeiroVetor = pegarValores(lines.shift());

console.log(`A=${(b*a).toFixed(4)}`)