var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
// let [a, b, c, d] = pegarValores(lines.shift());
// let primeiroVetor = pegarValores(lines.shift());

let a = Number(lines.shift())
let b = Number(lines.shift())
let c = Number(lines.shift())
let salario = b*c

console.log(`NUMBER = ${a}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)