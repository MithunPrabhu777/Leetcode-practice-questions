const canSum = (target,array) => {
    array.sort((a,b) => a - b);


    function helper(start,end){

        while(start < end){
            let referenceTarget = array[start] + array[end];

            if(referenceTarget == target){
                console.log(true);
                return;
            }
    
            else if(referenceTarget > target){
                end--;
            }
    
            else if(referenceTarget < target){
                start++;
            }
        }
            
    }

    helper(0,array.length-1);

    return false;
}

console.log(canSum(300,[7,14]));
