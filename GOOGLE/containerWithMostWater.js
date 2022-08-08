const maxArea = (height) => {
    let left = 0, right = height.length - 1;
    let max = 0;

    while (left < right) {
        let currentSum, min;
        if (height[left] < height[right]) {
            min = height[left];
            currentSum = min * (right - left);
            left++;
        } else {
            min = height[right];
            currentSum = min * (right - left);
            right--;
        }

        max = Math.max(currentSum, max);
    }

    return max;
};

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log(maxArea(height));  // pattern two pointers