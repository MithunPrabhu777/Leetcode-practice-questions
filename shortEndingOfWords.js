var minimumLengthEncoding = function (words) {

    if (words.length == 1) return words[0].length + 1;

    words = [...new Set(words)];
    const obj = {};
    let count = 0;

    for (const i of words) {
        obj[i] = i;
    }

    for (const word of words) {
        for (let i = 1; i <= word.length; i++) {

            const check = word.substring(i);
            if (obj[check]) delete obj[check]
        }
    }

    for (let key in obj) {
        count += key.length + 1;
    }

    return count;
};

let words = ["time", "me", "bell"];
console.log(minimumLengthEncoding(words));