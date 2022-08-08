var topKFrequent = function (nums, k) {
    let frequency = new Map(), bucket = [], result = [];

    for (let num of nums) {
        frequency.set(num, frequency.get(num) + 1 || 1);
    }

    for (let [num, freq] of frequency) {
        bucket[freq] = (bucket[freq] || new Set()).add(num);
    }

    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) result.push(...bucket[i])
        if (result.length === k) break;
    }

    return result;
};

let nums = [1, 1, 1, 2, 2, 3], k = 2;
console.log(topKFrequent(nums, k));
Output: [1, 2]