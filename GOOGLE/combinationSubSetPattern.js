var combine = function (n, k) {
    let result = [];

    backtracking(1, k, []);

    function backtracking(number, k, subset) {
        if (n - number + 1 < k) return;

        if (k === 0) return result.push(subset);

        for (let i = number; i <= n; i++) {
            let currentSubset = [...subset];
            currentSubset.push(i);
            backtracking(i + 1, k - 1, currentSubset);
        }
    }

    return result;
};

Input: n = 4, k = 2
Output:
[
    [2, 4],
    [3, 4],
    [2, 3],
    [1, 2],
    [1, 3],
    [1, 4],
]