var checkInclusion = function (s1, s2) {
    const map = new Map();
  
    for (let char of s1) {
      map.set(char, map.get(char) + 1 || 1);
    }
  
    let left = 0;
    let right = 0;
  
    while (left <= right && right < s2.length) {
      const charRight = s2[right];
      if (map.get(charRight) > 0) {
        map.set(charRight, map.get(charRight) - 1);
        right++;
      } else if (!map.has(charRight)) {
        while (left != right) {
          const charLeft = s2[left++];
          if (map.has(charLeft)) map.set(charLeft, map.get(charLeft) + 1);
        }
        left++;
        right++;
      } else {
        const charLeft = s2[left++];
        map.set(charLeft, map.get(charLeft) + 1);
      }
  
      if (right - left >= s1.length) return true;
    }
    return false;
  };

  let s1="adc",s2="dcda";
  console.log(checkInclusion(s1,s2));