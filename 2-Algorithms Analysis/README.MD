# Algorithm analysis
- There are multiple ways to solve one problem
- Ex: There are multiple algorithms to sort list of numbers
- How do we analyse wich one of them is the most efficient algorithm?
- Generally, when we talk about performance, we use absolute measure
- If i can run 100 meters in 12 second, I'm faster than someone who takes 15 seconds

## Algorithm analysis contd.
The absolute running time of an algorithm cannot be predicted, since it depends on a number of factors
- Programming language used to implement the algorithm
- The computer the program runs on
- Other programs running at the same time
- Quality of the operating system
- And many more...

We evaluiate the performance of an algorithm <u>in terms of its input size</u>

__Time copmplexity__ - Amount of time taken by an algorithm to run, as a function of input size

__Space copmplexity__ Amount of memory taken by an algorithm to run, as a function of input size

By evaluating agains the input size, the analysis is not only machine independent but the comparison is also more appropiate.

There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constrains.

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity.

If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space

## How to represent complexity?
- Asymptotic notations
- Mathematical tools to represent time and space complexity

1. Big-O Notation (O-notation) - Worst case complexity - TODO: ADD ARTICLES URL
2. Omega Notation ($\mathsf{\Omega}$-notation) - Best case complexity - TODO: ADD ARTICLES URL
3. Theta Notation ($\mathsf{\Theta}$-notation) - Average case complexity - TODO: ADD ARTICLES URL