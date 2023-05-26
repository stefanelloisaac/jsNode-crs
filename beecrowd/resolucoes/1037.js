var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
// let [a, b, c] = pegarValores(lines.shift());
// let [c, d] = pegarValores(lines.shift());

let a = Number(lines.shift())
let intervalo = ["[0,25]","(25,50]","(50,75]","(75,100]"]; 

if (a<0 || a>100) {
  console.log("Fora de intervalo")
} else if (a>=0 && a<=25) {
  console.log(`Intervalo ${intervalo[0]}`)
} else if (a>25 && a<=50) {
  console.log(`Intervalo ${intervalo[1]}`)
} else if (a>50 && a<=75) {
  console.log(`Intervalo ${intervalo[2]}`)
} else {
  console.log(`Intervalo ${intervalo[3]}`)
}