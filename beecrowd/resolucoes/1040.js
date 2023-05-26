var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
// let [a, b, c] = pegarValores(lines.shift());
let [a, b, c, d] = pegarValores(lines.shift());
let [exam] = pegarValores(lines.shift());

let av1 = (a*2)
let av2 = (b*3)
let av3 = (c*4)
let av4 = (d*1)

let nota = parseFloat((av1+av2+av3+av4)/10)
let notaFinal = parseFloat((exam + nota)/2)

console.log(`Media: ${nota.toFixed(1)}`)
if (nota<5.0) {
  console.log("Aluno reprovado.")
} else if (nota>=7.0) {
  console.log("Aluno aprovado.")
} else {
  console.log("Aluno em exame.")
  console.log(`Nota do exame: ${exam.toFixed(1)}`)
  if (notaFinal>=5.0) {
    console.log("Aluno aprovado.")
    console.log(`Media final: ${notaFinal.toFixed(1)}`)
  } else {
    console.log("Aluno reprovado.")
    console.log(`Media final: ${notaFinal.toFixed(1)}`)
  }
}  