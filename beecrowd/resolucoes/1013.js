var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
let [a, b, c] = pegarValores(lines.shift());
// let [d, e, f] = pegarValores(lines.shift());

// let primeiroVetor = pegarValores(lines.shift());

// let a = Number(lines.shift())
// let c = (4.0/3) * b * Math.pow(a, 3)

let ab = (a + b + (Math.abs(a-b)))/2
let ac = (a + c + (Math.abs(a-c)))/2
let bc = (b + c + (Math.abs(b-c)))/2

console.log(`${Math.max(ab, ac, bc)} eh o maior`)