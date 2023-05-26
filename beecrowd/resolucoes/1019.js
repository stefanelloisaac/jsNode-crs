var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
// let [a, b] = pegarValores(lines.shift());
// let [c, d] = pegarValores(lines.shift());

let a = Number(lines.shift())

let hr = parseInt(a/3600); a -= hr * 3600;
let min = parseInt(a/60); a -= min * 60;
let seg = parseInt(a); a -= seg;


console.log(`${hr}:${min}:${seg}`)
