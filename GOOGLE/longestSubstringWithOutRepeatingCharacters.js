var lengthOfLongestSubstring = function (s) {
    let letterMap = new Map();

    let [left, right, max] = [0, 0, 0];

    while (right < s.length) {
        let currentValue = s[right];

        const canSlide = letterMap.has(currentValue);

        if (canSlide) {
            let rightValue = letterMap.get(currentValue) + 1;

            left = Math.max(left, rightValue);
        }

        let window = (right - left) + 1;

        max = Math.max(max, window);
        letterMap.set(currentValue, right);
        right++;

    }

    return max;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // pattern sliding window