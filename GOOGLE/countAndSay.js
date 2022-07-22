var countAndSay = function (n) {
    let string = "1";

    for (let i = 1; i < n; i++) {
        let stringArray = string.split("");
        string = "";
        let count = 1;

        for (let j = 0; j < stringArray.length; j++) {
            if (stringArray[j] !== stringArray[j + 1]) {
                string += count + stringArray[j];
                count = 1;
            } else {
                count++;
            }
        }
    }

    return string;
};

let n = 4;
console.log(countAndSay(n));
Input: n = 4
Output: "1211"