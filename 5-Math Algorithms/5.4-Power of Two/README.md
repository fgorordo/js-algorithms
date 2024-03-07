# Power of Two
<u>__Problem__</u> - Give a positive integer ___"n"___, determine if the number is a power of 2 or not
An integer is power of two if there exists an integer ___"x"___ such that ___"n"___ === 2<sup>x</sup>
>isPowerOfTwo(1) = true( 2<sup>0</sup> )
>
>isPowerOfTwo(2) = true( 2<sup>1</sup> )
>
>isPowerOfTwo(5) = false

## Pseudocode
n = 8

8 / 2 = 4 (remainder 0)

4 / 2 = 2 (remainder 0)

2 / 2 = 1 (remainder 0)

If remainder is not 0 in any step, ___"n"___ is not a power of two.

If the remainder is 0 and ___"n"___ comes down to 1 eventually, ___"n"___ is power of two.

## Bitwise Power of Two
1 -> 1

2 -> 10

3 -> 100

4 -> 1000


| 1 | 2 | 3 | 4 |
|---|---|---|---|
|0001|0010|0100|1000|

| 0 | 1 | 2 | 3 |
|---|---|---|---|
|0000|0001|0010|0100|
| 0 - 0000 | 0 - 0000 | 0 - 0000 | 0 - 0000 |

