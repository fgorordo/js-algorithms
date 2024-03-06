# Whats is an algorithm
__An algorithm is a set of well-defined instructions to solve a particular problem.__

```mermaid
flowchart LR
    A[Ingredients]-->B[Recipe]-->C[Tasty dish]
```
```mermaid
flowchart LR
    ingredients["Cup of noodles \n Taste maker \n Water"]
    steps(["1. Boil water\n2. Pour water into cup\n3. Add taste maker\n4. Close lid and wait 4 minutes"])
    tastydish["Tasty noodles"]
    ingredients-->steps-->tastydish
```

## Programming
Algorithm to add two numbers

```mermaid
flowchart LR
    A[Inputs]-->B{Algorithm}-->C[Output]
```
```mermaid
flowchart LR
    inputs["Two numbers\n'a' and 'b'"]
    alghorithm(["1. Add numbers using'+'\n2. Return the value"])
    output["Sum of 'a' and 'b'"]
    inputs-->alghorithm-->output
```

## Characteristics
- Well defined inputs and outputs
- Each step should be clear and unambiguous
- Language independent
```mermaid
flowchart LR
    inputs["Two numbers\n'a' and 'b'"]
    alghorithm(["1. Add numbers using'+'\n2. Return the value"])
    output["Sum of 'a' and 'b'"]
    inputs-->alghorithm-->output
```

## Why algorithms?
- As developer, you're going to come across problems that you need to solve
- Learning algorithms translates to learning different techniques to efficiently solve those problems
- One problem can be solved in many ways using algorithms
- Every algorithm comes with is own tradeoffs when it comes to performance 