function letterCombinationOfLetters(digits) {
  if (!digits) return [];

  let combinedArray = [];

  let numberCombinations = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  function combineLetters(string, index) {
    if (index == digits.length) {
      combinedArray.push(string);
      return;
    }

    let allLetters = numberCombinations[digits[index]];

    for (let letter of allLetters) {
      combineLetters(string + letter, index + 1);
    }
  }

  combineLetters("", 0);

  return combinedArray;
}

let digits = "23";
console.log(letterCombinationOfLetters(digits));
