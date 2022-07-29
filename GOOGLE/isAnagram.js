var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;

    let countOfLetters = {};

    for (let letter of s) {
        if (countOfLetters[letter]) countOfLetters[letter]++;
        else countOfLetters[letter] = 1;
    }

    for (let letter of t) {
        if (countOfLetters[letter]) {
            countOfLetters[letter]--;
        } else {
            return false;
        }
    }

    return true;
};


Input: s = "anagram", t = "nagaram"
Output: true

//You can use charCodeAt for both s and t and can create array of 26 size for taking count of each letters and if goes below 0 return false