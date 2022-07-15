
var twoSum = function(nums, target) {
    let map = {};

    for(let i=0; i < nums.length; i++){
        let difference = target - nums[i];
        if(map[difference] != undefined){
            return [map[difference], i];
        }

        map[nums[i]] = i;
    }
};

let nums = [2,7,11,15], target = 9;
console.log(twoSum(nums,target));