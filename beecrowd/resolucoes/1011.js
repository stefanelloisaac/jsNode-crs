var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
// let [a, b, c] = pegarValores(lines.shift());
// let [d, e, f] = pegarValores(lines.shift());

// let primeiroVetor = pegarValores(lines.shift());

let a = Number(lines.shift())
let b = 3.14159
let c = (4.0/3) * b * Math.pow(a, 3)

console.log(`VOLUME = ${c.toFixed(3)}`)