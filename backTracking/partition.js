var partition = function (s) {
  let result = [];

  function isPalindrome(s) {
    return s.split("").reverse().join("") == s;
  }

  function backtrack(result, temp, index) {
    if (index == s.length) {
      result.push([...temp]);
      return;
    }

    for (let i = index + 1; i <= s.length; i++) {
      let target = s.substring(index, i);
      if (isPalindrome(target)) {
        temp.push(target);
        backtrack(result, temp, i);
        temp.pop();
      }
    }
  }

  backtrack(result, [], 0);

  return result;
};

let s = "aab";
partition(s);
