/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function (n) {
    let stack = [];

    function backtracking(temp, left, right) {
        if (left == 0 && right == 0) {
            stack.push(temp);
        }

        if (left > 0) {
            backtracking(temp + "(", left - 1, right);
        }

        if (right > left) {
            backtracking(temp + ")", left, right - 1);
        }
    }

    backtracking("", n, n);

    return stack;
};


const n = 3;
console.log(generateParenthesis(n));
Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]