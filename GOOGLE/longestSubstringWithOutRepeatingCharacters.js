var lengthOfLongestSubstring = function (s) {
    let set = new Set();
    
    let longest = 0;
    
    let i=0,j=0;
    
    while(i < s.length && j < s.length){
        if(!set.has(s[j])){
            set.add(s[j]);
            longest = Math.max(longest,j-i+1);
            j++;
        }else{
            set.delete(s[i]);
            i++;
        }
    }
    
    return longest;
};

let s = "abcabcbb";
console.log(lengthOfLongestSubstring(s)); // pattern sliding window