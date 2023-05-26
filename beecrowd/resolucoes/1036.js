var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
let [a, b, c] = pegarValores(lines.shift());
// let [c, d] = pegarValores(lines.shift());

// let a = Number(lines.shift())

if (a == 0.0) {
  console.log("Impossivel calcular");
} else {
  let delta = Math.pow(b, 2) - 4 * a * c;
  if (delta < 0.0) {
    console.log("Impossivel calcular");
  } else {
    let r1 = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    let r2 = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
  }
}