// Desafio: FIBONACCI RÁPIDO
// A fórmula de Binet é uma forma de calcular números de Fibonacci. Sua tarefa é, dado um natural n, calcular o valor de Fibonacci(n) usando a fórmula acima.


// Entrada
// A entrada é um número natural n (0 < n ≤ 50).

// Saída
// A saída é o valor de Fibonacci(n) com 1 casa decimal utilizando a fórmula de Binet dada.


// SOLUÇÃO:


let N = parseInt(gets());

let fib = ((((Math.sqrt(5)+1)/2)**N)-(((Math.sqrt(5)-1)/2)**N))/Math.sqrt(5);

print(fib.toFixed(1));