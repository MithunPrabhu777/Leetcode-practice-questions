var spiralOrder = function (matrix) {
    let result = [];

    while (matrix.length) {
        let shifted = matrix.shift();
        result.push(...shifted);

        for (let value of matrix) {
            let poppedValue = value.pop();
            if (poppedValue) result.push(poppedValue);
            value.reverse();
        }

        matrix.reverse();
    }

    return result;
};

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(spiralOrder(matrix));