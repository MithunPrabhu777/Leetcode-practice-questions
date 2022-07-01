const maxProduct = (words) => {
    const BASE_CODE = 97;

    const charSets = words.map((word) => {
      let data = 0;
      for (let i = 0; i < word.length; ++i) {
        data |= 1 << (word.charCodeAt(i) - BASE_CODE);
      }
      return data;
    });

    let max = 0;

    for (let i = 0; i < words.length - 1; ++i) {
      for (let j = i + 1; j < words.length; ++j) {
        const newLen = words[i].length * words[j].length;
        newLen > max && (charSets[i] & charSets[j]) === 0 && (max = newLen);
      }
    }
    
    return max;
  };

  console.log(maxProduct(["abcw","baz","foo","bar","xtfn","abcdef"]));