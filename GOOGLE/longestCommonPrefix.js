var longestCommonPrefix = function(strs) {

    if(strs.length === 1) return strs[0];
    
    strs.sort();
    
    if(strs[0] === strs[strs.length-1]) return strs[0];
    
    let prefix = "";
    
    for(let i=0; i < strs[0].length; i++){
        if(strs[0][i] === strs[strs.length-1][i]){
            prefix += strs[0][i];
        }else{
            return prefix;
        }
    }
    
    return prefix;
};

let strs = ["flower","flow","flight"];
console.log(longestCommonPrefix(strs));  //pattern sorting technique