# Misc. problems
- Cartesian product
- Climbing staircase
- Tower of Hanoi

## Cartisian Product
<u>__Problem__</u> - Given two finite non-empty sets, find ther Cartesian Product.

In mathematics, specifically set theory, the Cartesian product of two sets ___"A"___ and ___"B"___, denoted $AxB$, is the set of all ordered pairs $(A, B)$ where a is in A and b is in B.

```javascript
const A = [1,2];
const B = [3,4];
AxB = [[1,3], [1,4],[2,3], [2,4]]

const C = [];
const D = [];
CxD = [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]];
```

### Cartesian product idea
1. Traverse each array and pair each element if the first array with each element in the second array

```javascript
function cartesianProduct(arr1, arr2) {
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            result.push([arr1[i], arr2[j]])
        }
    }

    return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];
console.log(cartesianProduct(arr1,arr2)); // [ [1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]

// Time Complexity = O(mn)
```

## Climbing staicase
<u>__Problem__</u> - Given a staircase of ___"n"___ steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 step at a time.2

```javascript
N = 1, climbingStaircase(1) = 1 | (1)
N = 2, climbingStaircase(2) = 2 | (1,1) and (2, 1)
N = 3, climbingStaircase(3) = 3 | (1,1,1) (1,2) and (2,1)
N = 4, climbingStaircase(4) = 5 | (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,2)
```

### Climbing staircase idea
1. At any given time, you can climb either 1 step or 2 step.
2. If you have to climb to step "n", we can only climb from step "n-1" or "n-2".
3. Calculate the ways we can climb to "n-1" and "n-2" steps and add the two

4. $climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)$

```javascript
function climbingStaircase(n) {
    const noOfWays = [1, 2]
    for(let i = 2; i <= n; i++) {
        noOfWays[i] = noOfWays[i-1] + noOfWays[i-2];
    }

    return noOfWays[n-1]
}

// Time Complexity = O(n) - Linear
```

## Tower of Hanoi
- The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:
    - Only one disk may be moved at a time.
    - Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod.
    - No disk may be placed on top of a disk that is smaller

![Tower of Hanoi Example](./hanoi1)

1. Shift "n-1" disk from "A" to "B", using "C" (when required)
2. Shift "last disk from "A" to "C"
3. Shift "n-1" disk from "B" to "C", using "A" (when required)

![Tower of Hanoi Example](./hanoi2)

```javascript
function towerOfHanoi(n, fromRod, toRod, usingRod) {
    if ( n === 1) {
        console.log(`Move disk 1 from ${fromRod} to ${toRod}`);
        return;
    }

    towerOfHanoi(n-1, fromRod, usingRod, toRod)
    console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
    towerOfHanoi(n-1, usingRod, toRod, fromRod)
}

towerOfHanoi(3, 'A', 'C', 'B')

// Time Complexity O(2^n)
```