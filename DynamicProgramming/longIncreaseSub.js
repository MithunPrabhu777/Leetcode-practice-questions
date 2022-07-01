var lengthOfLIS = function(nums) {
    let dp = new Array(nums.length).fill(1);
    
    for(let i=0; i < nums.length; i++){
        for(let j=0; j < i; j++){
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i],1 + dp[j]);
            }
        }
    }
    
    return Math.max(...dp);
};

let nums = [10,9,2,5,3,7,101,18];
console.log(lengthOfLIS(nums));