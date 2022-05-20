var xorOfArrayItems = function (nums) {
  let result = 0;
  let output = [];

  function backTracking(start, arrayElements) {
    output.push([...arrayElements].reduce((a, b) => a ^ b, 0));

    for (let i = start; i < nums.length; i++) {
      arrayElements.push(nums[i]);
      backTracking(i + 1, arrayElements);
      arrayElements.pop();
    }
  }

  backTracking(0, [nums[0]]);

  return output.reduce((a, b) => a + b, 0);
};

let nums = [1, 3];
console.log(xorOfArrayItems(nums));
