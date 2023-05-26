var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
// // let [a, b, c] = pegarValores(lines.shift());
// let [x, y] = pegarValores(lines.shift());

let i = Number(1)

while (i<=9) {
  for (j=7; j>4; j--) {
  console.log(`I=${i} J=${j}`)
  } 
  i+=2;
}