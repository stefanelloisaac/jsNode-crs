
var input = require('fs').readFileSync('./dev/stdin.txt', 'utf8');
var lines = input.split('\n');
console.log(lines);

// let primeiroVetor = pegarValores(lines.shift());
// const pegarValores = (line) => line.split(" ").map(a => Number(a)); //se não for número, retira o map
// let [a, b] = pegarValores(lines.shift());
// let [c, d] = pegarValores(lines.shift());

let a = Number(lines.shift())
const value = parseFloat(a);
const moneyBill = [100, 50, 20, 10, 5, 2];
const coins = [1, 0.5, 0.25, 0.1, 0.05, 0.01];
let rest = value * 100;

console.log("NOTAS:");
moneyBill.forEach((money) => {
  const quantity = Math.floor(rest / (money * 100));
  console.log(quantity + " nota(s) de R$ " + money.toFixed(2));
  rest %= money * 100;
});

console.log("MOEDAS:");
coins.forEach((coin) => {
  const quantity = Math.floor(rest / (coin * 100));
  console.log(quantity + " moeda(s) de R$ " + coin.toFixed(2));
  rest %= coin * 100;
});
