// const fib = (number) => {
//     if(number <= 2) return 1;

//     return fib(number - 1) + fib(number - 2);
// }

// console.log(fib(43));  // Time complexity : 2^n

//dynamic programming     // Time complexity : n

// const fib = (number,memo = {}) => {
//     if(number <= 2) return 1;

//     if(number in memo) return memo[number];

//     memo[number] = fib(number-1,memo) + fib(number-2,memo);

//     return memo[number]
// }

// console.log(fib(1000));