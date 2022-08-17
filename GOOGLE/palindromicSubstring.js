/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            result += 1;
            left -= 1;
            right += 1;
        }

        left = i;
        right = i + 1;

        while (left >= 0 && right < s.length && s[left] === s[right]) {
            result += 1;
            left -= 1;
            right += 1;
        }
    }

    return result;
};

let s = "aaa";
console.log(countSubstrings(s));
Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".