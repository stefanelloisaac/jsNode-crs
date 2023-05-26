var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
let [a, b, c] = pegarValores(lines.shift());
// let [x, y] = pegarValores(lines.shift());

if (a < b + c && b < a + c && c < a + b) {
  let perimetro = a+b+c
  console.log(`Perimetro = ${perimetro.toFixed(1)}`) 
} else {
  let area = ((a+b)*c)/2
  console.log(`Area = ${area.toFixed(1)}`)
}