//definindo constante
const primeiraConst = 10; //const só pode receber uma vez

var primeiraVar = 2       //variável pode ser número, string, boolean, etc
console.log(primeiraVar)
primeiraVar = "oi"
console.log(primeiraVar)

let primeiraLet = 2       //não pode ser declarada mais de uma vez
console.log(primeiraLet)
primeiraLet = "oi"        //pode ser alterada
console.log(primeiraLet)

if (minhaLet === minhaVar) {  // = = = precisa ser o mesmo valor e mesmo tipo
  console.log(true);
} else {
  console.log(false);
}

for (let i=0; i<10; i++) {
  console.log(i);
}

function retornaODobro (numero = 0) {
  return numero * 2;
}

const retornaODobro = (numero = 0) => numero * 2;



