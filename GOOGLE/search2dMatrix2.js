/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let row = 0, col = matrix[0].length - 1;

    while (row < matrix.length && col < matrix[0].length) {

        let referenceValue = matrix[row][col];
        if (target === referenceValue) return true;
        else if (target < referenceValue) {
            col--;
        } else {
            row++;
        }
    }

    return false;
};

Input: matrix = [[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], target = 5
Output: true