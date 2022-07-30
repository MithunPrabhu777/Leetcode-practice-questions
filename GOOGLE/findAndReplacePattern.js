function findAndReplacePattern(words, pattern) {

    let myPattern = findPattern(pattern);

    return words.filter((word) => findPattern(word) === myPattern);


    function findPattern(string) {
        let result = "";

        for (let letter of string) {
            result += string.indexOf(letter);
        }

        return result;
    }
};

Input: words = ["abc", "deq", "mee", "aqq", "dkd", "ccc"], pattern = "abb"
Output: ["mee", "aqq"]

