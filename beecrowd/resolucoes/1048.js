var input = require("fs").readFileSync("./dev/stdin.txt", "utf8");
var lines = input.split("\n");
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map((a) => Number(a)); //se não for número, retira o map
// let [a, b] = pegarValores(lines.shift());
// let [x, y] = pegarValores(lines.shift());

let a = Number(lines.shift())

if (a<=400.00) {
  let reajuste = a*0.15
  let salario = a+reajuste
  console.log(`Novo salario: ${salario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
  console.log(`Em percentual: 15 %`)
} else if (a > 400.00 && a <= 800.00) {
  let reajuste = a*0.12
  let salario = a+reajuste
  console.log(`Novo salario: ${salario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
  console.log(`Em percentual: 12 %`)
} else if (a > 800.00 && a <= 1200.00) {
  let reajuste = a*0.10
  let salario = a+reajuste
  console.log(`Novo salario: ${salario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
  console.log(`Em percentual: 10 %`)
} else if (a > 1200.00 && a <= 2000.00) {
  let reajuste = a*0.07
  let salario = a+reajuste
  console.log(`Novo salario: ${salario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
  console.log(`Em percentual: 7 %`)
} else {
  let reajuste = a*0.04
  let salario = a+reajuste
  console.log(`Novo salario: ${salario.toFixed(2)}`)
  console.log(`Reajuste ganho: ${reajuste.toFixed(2)}`)
  console.log(`Em percentual: 4 %`)
}