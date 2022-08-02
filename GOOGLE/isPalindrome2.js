var validPalindrome = function (s) {

    let left = 0, right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
            continue;
        }

        return !!(isPalindrome(left + 1, right, s) || isPalindrome(left, right - 1, s));
    }

    return true;
}

function isPalindrome(left, right, s) {

    for (let i = left, j = right; i < j; i++, j--) {
        if (s[i] != s[j]) return false;
    }

    return true;
}

Input: s = "abca"
Output: true
// Explanation: You could delete the character 'c'.