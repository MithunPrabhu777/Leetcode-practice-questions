var removeDuplicates = function(nums) {
    let lastIndex = 1;
    
    for(let i=0; i < nums.length-1; i++){
        if(nums[i] != nums[i+1]){
            nums[lastIndex] = nums[i+1];
            lastIndex+=1;
        }
    }
    
    return lastIndex;
};

let nums = [1,1,2];
console.log(removeDuplicates(nums));