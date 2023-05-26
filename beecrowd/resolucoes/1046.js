var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
let [a, b] = pegarValores(lines.shift());
// let [x, y] = pegarValores(lines.shift());

if(a<b) {
  time=b-a
  console.log(`O JOGO DUROU ${time} HORA(S)`)
} else if(a>b) {
  time=24-(a-b)
  console.log(`O JOGO DUROU ${time} HORA(S)`)
} else {
  time = 24
  console.log(`O JOGO DUROU ${time} HORA(S)`)
}