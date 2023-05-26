var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
// let [a, b] = pegarValores(lines.shift());
// let [c, d] = pegarValores(lines.shift());

let a = Number(lines.shift())
let b = Number(lines.shift())
let cons = 12;

let total = ((a*b)/cons)



console.log(`${total.toFixed(3)}`)