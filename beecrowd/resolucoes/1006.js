var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map

let a = Number(lines.shift())
let b = Number(lines.shift())
let c = Number(lines.shift())
let media = (a*0.2+b*0.3+c*0.5)

// let primeiroVetor = pegarValores(lines.shift());

console.log(`MEDIA = ${media.toFixed(1)}`)