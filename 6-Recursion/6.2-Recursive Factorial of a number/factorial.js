function factorial(n) {
    if ( n === 0) return 1;
    return n * factorial(n-1)
}

console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
console.log(factorial(5)) // 120

/*
Explicación:
1. Se recibe como parametro "n" cuyo valor es 5;
2. Se verifica si "n" es igual a 0
3. En caso de ser 0, retorna 1
4. Retorna "n"(5) * factorial("n"-1(4)) 
5. Vuelve a la linea 1.

Time complexity = O(n);
Space complexity = O(1);
*/
