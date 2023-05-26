var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
let [a, b, c] = pegarValores(lines.shift());
// let [x, y] = pegarValores(lines.shift());

let a2 = Math.pow(a,2)
let b2 = Math.pow(b,2)
let c2 = Math.pow(c,2)

if (a >= (b+c) || b >= (a+c) || c >= (a+b)) {
  console.log(`NAO FORMA TRIANGULO`) 
} else if (a2 === (b2 + c2) || b2 === (a2 + c2) || c2 === (a2 + b2)) {
  console.log(`TRIANGULO RETANGULO`)
} else if (a2 > (b2 + c2) || b2 > (a2 + c2) || c2 > (a2 + b2)) {
  console.log(`TRIANGULO OBTUSANGULO`)
} else if (a2 < (b2 + c2) || b2 < (a2 + c2) || c2 < (a2 + b2)) {
  console.log(`TRIANGULO ACUTANGULO`)
} if (a == b && a == c && b == c) {
  console.log(`TRIANGULO EQUILATERO`)
} else if (a == b || a ==c || b == c) {
  console.log(`TRIANGULO ISOSCELES`)
}