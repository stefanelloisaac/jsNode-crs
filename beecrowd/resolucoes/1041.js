var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
// let [a, b, c] = pegarValores(lines.shift());
let [x, y] = pegarValores(lines.shift());

if (x===0.0 && y===0.0) {
  console.log("Origem")
} else if (x===0.0 && y!==0.0) {
  console.log("Eixo Y")
} else if (y===0.0 && x!==0.0) {
  console.log("Eixo X")
} else if (x>0.0 && y>0.0) {
  console.log("Q1")
} else if (x<0.0 && y>0.0) {
  console.log("Q2")
} else if (x<0.0 && y<0.0) {
  console.log("Q3")
} else {
  console.log("Q4")
}