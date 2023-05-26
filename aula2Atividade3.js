//3 - fazer uma sequência fibonacci

function fibonacci(item) {
  let a = 0;
  let b = 1;
  let c = 0;
  let fib = [];

  for (let i=0; i < item; i++) {
    c = a + b
    fib.push(c)
    a = b
    b = c
  }
  return fib;
}

console.log(fibonacci(20))