/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {

    let frequencyB = new Array(26).fill(0);


    for (let word of words2) {
        let frequencyArray = findFrequency(word);

        for (let i = 0; i < frequencyArray.length; i++) {
            frequencyB[i] = Math.max(frequencyArray[i], frequencyB[i]);
        }
    }

    let result = [];

    for (let word of words1) {
        let currentFrequency = findFrequency(word);
        let isSubset = findSubset(currentFrequency);

        if (isSubset) {
            result.push(word);
        }
    }

    return result;

    function findSubset(wordArray) {
        for (let i = 0; i < wordArray.length; i++) {
            if (frequencyB[i] > wordArray[i]) {
                return false;
            }
        }

        return true;
    }


    function findFrequency(string) {

        let stringArray = new Array(26).fill(0);

        for (let i = 0; i < string.length; i++) {
            let index = string.charCodeAt(i) - "a".charCodeAt();
            stringArray[index]++;
        }

        return stringArray;
    }
};


Input: words1 = ["amazon", "apple", "facebook", "google", "leetcode"], words2 = ["e", "o"]
Output: ["facebook", "google", "leetcode"]