var longestValidParentheses = function (s) {
  if (s.length === 0) return 0;

  let stack = [-1];
  let max = 0;

  // s = ")()())";
  // stack = [1];

  for (let i = 0; i < s.length; i++) {
    //push into stack if opening paran
    if (s[i] === "(") {
      stack.push(i);
    } else {
      // pop out if it's an closing paran
      stack.pop();

      // if we don't hav anything in stack, push this new index
      if (stack.length === 0) {
        stack.push(i);
      } else {
        // i - stack[stack.length - 1] is length of longest substr
        max = Math.max(max, i - stack[stack.length - 1]);
      }
    }
  }
  return max;
};

let s = "(()";
console.log(longestValidParentheses(s));

//Time complexity : O(n)
//Space complexity : O(n)

function longestValidParentheses(s) {
  let longest = 0,
    leftCount = 0,
    rightCount = 0;

  //left to right pass
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") leftCount++;
    else rightCount++;

    if (leftCount === rightCount) {
      longest = Math.max(longest, leftCount + rightCount);
    } else if (leftCount < rightCount) {
      leftCount = 0;
      rightCount = 0;
    }
  }

  //right to left pass
  (leftCount = 0), (rightCount = 0);
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === "(") leftCount++;
    else rightCount++;

    if (leftCount === rightCount) {
      longest = Math.max(longest, leftCount + rightCount);
    } else if (leftCount > rightCount) {
      leftCount = 0;
      rightCount = 0;
    }
  }
  return longest;
}

//Time complexity : O(n)
//Space complexity : O(1)
//Best solution Using left to right pass then right to left pass
