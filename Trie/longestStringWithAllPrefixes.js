let array = ["abc","ab","a","bpcd","bpc","b","bp"];
let result = "";
let hashMap = {};

for(let letter of array){
    if(!hashMap[letter]){
        hashMap[letter] = 1;
    }
}

for(let i=0; i < array.length; i++){
    let flag = true;
    let prev = "";
    
    for(let j=0; j < array[i].length; j++){
        prev += array[i][j];
        
        if(!hashMap[prev]){
           flag = false;
           break;
        }
    }
    
    if(flag){
        if(result.length < prev.length){
            result = prev;
        }
    }
}

if(result.length === 0) return "None";
    
console.log(result);