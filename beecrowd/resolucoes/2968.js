var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
let [a, b] = pegarValores(lines.shift());
// let [x, y] = pegarValores(lines.shift());

let dez = Math.ceil(0.1*(a*b))
let vinte = Math.ceil(0.2*(a*b))
let trinta = Math.ceil(0.3*(a*b))
let quarenta = Math.ceil(0.4*(a*b))
let cinq = Math.ceil(0.5*(a*b))
let ses = Math.ceil(0.6*(a*b))
let set = Math.ceil(0.7*(a*b))
let oit = Math.ceil(0.8*(a*b))
let noventa = Math.ceil(0.9*(a*b))

console.log(dez, vinte, trinta, quarenta, cinq, ses, set, oit, noventa)

