var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
// let [a, b] = pegarValores(lines.shift());
// let [c, d] = pegarValores(lines.shift());

let a = Number(lines.shift())
console.log(a) 
let nota100 = parseInt(a/100); a -= nota100 * 100;
let nota50 = parseInt(a/50); a -= nota50 * 50;
let nota20 = parseInt(a/20); a -= nota20 * 20;
let nota10 = parseInt(a/10); a -= nota10 * 10;
let nota5 = parseInt(a/5); a -= nota5 * 5;
let nota2 = parseInt(a/2); a -= nota2 * 2;
let nota1 = parseInt(a/1); a -= nota1 * 1;


console.log(`${nota100} nota(s) de R$ 100,00`)
console.log(`${nota50} nota(s) de R$ 50,00`)
console.log(`${nota20} nota(s) de R$ 20,00`)
console.log(`${nota10} nota(s) de R$ 10,00`)
console.log(`${nota5} nota(s) de R$ 5,00`)
console.log(`${nota2} nota(s) de R$ 2,00`)
console.log(`${nota1} nota(s) de R$ 1,00`)
