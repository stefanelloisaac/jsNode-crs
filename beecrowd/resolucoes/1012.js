var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
let [a, b, c] = pegarValores(lines.shift());
// let [d, e, f] = pegarValores(lines.shift());

// let primeiroVetor = pegarValores(lines.shift());

// let a = Number(lines.shift())
let pi = 3.14159
// let c = (4.0/3) * b * Math.pow(a, 3)

let tri = (a*c)/2
let cir = Math.pow(c,2)*pi
let tra = ((a+b)*c)/2
let qua = Math.pow(b,2)
let ret = a*b

console.log(`TRIANGULO: ${tri.toFixed(3)}`)
console.log(`CIRCULO: ${cir.toFixed(3)}`)
console.log(`TRAPEZIO: ${tra.toFixed(3)}`)
console.log(`QUADRADO: ${qua.toFixed(3)}`)
console.log(`RETANGULO: ${ret.toFixed(3)}`)