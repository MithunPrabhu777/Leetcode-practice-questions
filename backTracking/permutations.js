var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b);
  let result = [];

  function backtrack(nums, temp) {
    if (nums.length == 0) {
      result.push([...temp]);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (i != 0 && nums[i] == nums[i - 1]) continue;

      temp.push(nums[i]);
      nums.splice(i, 1);
      backtrack(nums, temp);
      nums.splice(i, 0, temp.pop());
    }
  }

  backtrack(nums, []);

  return result;
};

let nums = [1, 2, 3];
console.log(permuteUnique(nums));
