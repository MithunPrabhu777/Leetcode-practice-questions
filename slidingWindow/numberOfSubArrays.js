const numberOfSubArrays = (nums, k) => {
  let resultCount = 0;
  let oddArray = [];
  let last = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) oddArray.push(i);
    if (oddArray.length > k) {
      last = oddArray.shift() + 1;
    }
    if (oddArray.length == k) {
      resultCount += oddArray[0] - last + 1;
    }
  }

  return resultCount;
};

let nums = [1, 1, 2, 1, 1],
  k = 3;
console.log(numberOfSubArrays(nums, k));
