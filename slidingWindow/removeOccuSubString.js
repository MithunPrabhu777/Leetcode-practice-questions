var removeOccurrences = function(s, part) {
    
    let i = 0;
    let j = i + part.length;

    let sArray = s.split("");
    
    while(i < j && j < sArray.length){
        let subString = sArray.join("").substring(i,j);
        if(subString === part){
            sArray.slice(i,j);
        }else{
            i++;
            j++;
        }
    }

    return sArray.join("");
}

let s = "daabcbaabcbc", part = "abc";
console.log(removeOccurrences(s,part));

