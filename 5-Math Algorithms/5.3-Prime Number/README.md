# Prime Number
__<u>Problem</u>__ - Give a natural number ___"n"___, determine if the number is prime or not

A prime number is a natural number grater than 1 that is not a product of two smaller natural number
>isPrime(5) = true(1 * 5 or 5 * 1)
>
>isPrime(4) = false(1 * 4 or 2 * 2 or 4 * 1)
>

## Optimized Primality Test
Integers larger than the square root do not need to be checked because, whenever ___"n = a * b"___, one of the two factors ___"a"___ and ___"b"___ is less than or equal to the square root of ___"n"___

>N = 24, A = 4 and B = 6
>
>The square root of 24 is 4.89
>
>4 is less than 4.89
>
> A is less than the square root of N

>N = 35, A = 5 and B = 7
>
>The square root of 35 is 5.91
>
>5 is less than 5.91
>
>A is less than the square root of N
