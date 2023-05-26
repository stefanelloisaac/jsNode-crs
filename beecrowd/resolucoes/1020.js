var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
// let [a, b] = pegarValores(lines.shift());
// let [c, d] = pegarValores(lines.shift());

let a = Number(lines.shift())

let ano = parseInt(a/365); a -= ano * 365;
let mes = parseInt(a/30); a -= mes * 30;
let dia = parseInt(a); a -= dia;


console.log(`${ano} ano(s)`)
console.log(`${mes} mes(es)`)
console.log(`${dia} dia(s)`)