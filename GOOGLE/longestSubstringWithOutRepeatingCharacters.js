var lengthOfLongestSubstring = function (s) {
    const letterCountMap = new Map();

    // Destructuring assignment syntax is a JavaScript expression that pulls out values from array
    // Here we are assigning initial values to variables
    let [left, right, max] = [0, 0, 0];

    while (right < s.length) {
        const currentValue = s[right];
        const canSlide = letterCountMap.has(currentValue);

        // We can slide left pointer only when we find duplicate number from map
        if (canSlide) {
            const rightSlide = letterCountMap.get(currentValue) + 1;
            left = Math.max(left, rightSlide);
        }

        // We are finding window from left to right of non repeating characters
        const window = (right - left) + 1;
        max = Math.max(window, max);
        letterCountMap.set(currentValue, right);
        right++;
    }

    return max;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // pattern sliding window