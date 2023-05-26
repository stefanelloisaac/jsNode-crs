var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
// let [a, b] = pegarValores(lines.shift());
// let [x, y] = pegarValores(lines.shift());

let i = 2
while (i <= 100) {  
  console.log(i)
  i+=2
} 