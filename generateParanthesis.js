function generateParanthesis(n) {
  let result = [];

  function helper(n) {
    let subString = "";
    subString = subString + "(";
    n--;
    if (n == 0) {
      subString = subString + ")";
      n++;
    }
  }

  helper(n);
}

const n = 3;
generateParanthesis(n);
Output: ["((()))", "(()())", "(())()", "()(())", "()()()"];
