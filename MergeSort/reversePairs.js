var reversePairs = function(nums) {
    
    return mergeSort(nums, 0, nums.length-1);
    
};

function mergeSort(nums, low, high) {
    if(low >= high) return 0;
    
    let mid = Math.floor((low + high) / 2); // 2 , 1 , 0
    
    let inv = mergeSort(nums, low, mid); // 0,2  -   , 0,1  -  ,  0,0 - inv = 0
    
    inv += mergeSort(nums, mid+1, high); // 1, 1,  inv = 0
    
    inv += merge(nums, low, mid, high); // 
    
    return inv;
}

function merge(nums, low, mid, high) {
    let count = 0
    let j = mid+1;
    for(let i=low; i<=mid; i++) {
        while(j<=high && nums[i] > 2*nums[j]) j++;
        count += (j - (mid+1));
    }

    let temp = []
    let left = low, right = mid+1

    while(left <= mid && right <= high) {
        if(nums[left] <= nums[right]) temp.push(nums[left++])
        else temp.push(nums[right++])
    }
    
    while(left <= mid) temp.push(nums[left++])

    while(right <= high) temp.push(nums[right++])

    for(let i=low; i<=high; i++) nums[i] = temp[i - low]

    return count;
}

let nums = [2,4,3,5,1];
console.log(reversePairs(nums));
