/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

var convert = function (s, numRows) {
    if (numRows === 1) return s;

    let result = "";
    let period = (numRows * 2) - 2;
    let diff1 = period, diff2 = 0;

    for (let i = 0; i < numRows; i++) {
        let currentIndex = i;

        let flag = true;

        while (currentIndex < s.length) {

            flag = diff2 === 0 ? true : diff1 === 0 ? false : flag;

            result += s[currentIndex];

            flag === true ? currentIndex += diff1 : currentIndex += diff2;

            flag = !flag;
        }

        diff1 -= 2;
        diff2 += 2;
    }

    return result;
};

//time complexity O(n)

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);


Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
