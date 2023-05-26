var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
let [a, b, c] = pegarValores(lines.shift());
// let [x, y] = pegarValores(lines.shift());

let array = [a,b,c]
let sortido = array.sort(function(a, b){return a-b});

console.log(sortido[0])
console.log(sortido[1])
console.log(sortido[2])
console.log()
console.log(a)
console.log(b)
console.log(c)