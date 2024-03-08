# Recursive factorial of a number
__<u>Problem</u>__ - Give an integer ___"n"___, find the factorial of that integer.

The factorial of a non-negative integer ___"n"___, denoted ___"n!"___,is the product of all positive integer less

>Factorial of zero is 1.
>
>factorial(4) = 4 * 3 * 2 * 1 = 24
>
>factorial(5) = 5 * 4 * 3 * 2 * 1 = 120

## Tips for recursive solutions
Figure out how to break down the problem into smaller versions of the same prolbem

Identify the base case for recursion.

$5! = 5 * 4 * 3 * 2 * 1 === 5 * 4!$

$4! = 4 * 3 * 2 * 1 === 4 * 3!$

$3! = 3 * 2 * 1 === 3 * 2!$

$2! = 2 * 1 === 2 * 1!$

$1! = 1 * 1 === 1 * 0!$

$0! = 1$ __<u>Recursion BC</u>__

__<u>Formula</u>__

$n! = n * (n-1)!$