var kthSmallest = function (matrix, k) {
    let lo = matrix[0][0], hi = matrix[matrix.length - 1][matrix[0].length - 1] + 1;

    while (lo < hi) {
        let mid = lo + Math.floor((hi - lo) / 2);
        let count = 0;
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[0].length; j++) {
                if (matrix[i][j] <= mid) count += 1;
                else break;
            }
        }

        if (count < k) lo = mid + 1;
        else hi = mid;
    }

    return lo;
};

Input: matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8
Output: 13
// Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13