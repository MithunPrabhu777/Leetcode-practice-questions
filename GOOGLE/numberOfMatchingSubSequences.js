/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */

var numMatchingSubseq = function (s, words) {
    let result = 0;
    let map = new Map();

    for (let i = 0; i < words.length; i++) {
        if (s.length < words[i].length) continue;
        if (isSubSequence(s, words[i], map)) {
            result += 1;
        }
    }

    return result;

};

function isSubSequence(string, word, map) {
    if (map.has(word)) return map.get(word);
    let index = -1;

    for (let char of word) {
        index = string.indexOf(char, index + 1);

        if (index === -1) {
            map.set(word, false);
            return false;
        }
    }

    map.set(word, true);
    return true;
}

// Time-Complexity : O(n*n*logn) but we have map for already found words it can reduce time-complexity if there are duplicate words

Input: s = "abcde", words = ["a", "bb", "acd", "ace"]
Output: 3
// Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".