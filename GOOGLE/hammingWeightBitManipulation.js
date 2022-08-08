var hammingWeight = function (n) {
    let output = 0;
    while (n != 0) {
        n &= n - 1;
        output++;
    }
    return output;
};

let n = 11;
console.log(hammingWeight(n));