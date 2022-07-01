var hasAllCodes = function(s, k) {
    
    let result = [];

    function binaryCombination(noOfCombinations,subString){
        
        if(subString.length == noOfCombinations){
            result.push(subString);
            return;
        }
        
        binaryCombination(noOfCombinations,subString + "0");
        binaryCombination(noOfCombinations,subString + "1");
        
        return result;
    }
    
    let resultArray = binaryCombination(k,"");
    
    for(let i=0; i < resultArray.length; i++){
        if(!s.includes(resultArray[i])){
            return false;
        }
    }
    
    return true;
};

let  s = "0110", k = 2;
console.log(hasAllCodes(s,k));
