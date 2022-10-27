const maxArea = (height) => {
    let [left, right, max] = [0, height.length - 1, 0];

    while (left < right) {
        max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
        if (height[right] > height[left]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));  // pattern two pointers