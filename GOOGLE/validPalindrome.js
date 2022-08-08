var isPalindrome = (s) => {

    if (!s.length) true;

    s = s.toLowerCase();

    return isValid(s);
}

var isValid = (s) => {
    let [left, right] = [0, s.length - 1];

    while (left < right) {
        while ((left < right) && isNonAlphaNumeric(s[left])) left++;
        while ((left < right) && isNonAlphaNumeric(s[right])) right--;

        const validLetter = s[left] === s[right];

        if (!validLetter) return false;

        left++, right--;
    }

    return true;
}


var isNonAlphaNumeric = (char) => {
    let isNonAlpha = char < 'a' || 'z' < char;
    let isNonNumeric = char < '0' || "9" < char;

    return isNonAlpha && isNonNumeric;
}

let s = "[A man, a plan, a canal: Panama";
console.log(isPalindrome(s));