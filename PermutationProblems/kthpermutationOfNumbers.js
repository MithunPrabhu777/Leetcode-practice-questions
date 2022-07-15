var getPermutation = function (n, k) {
    const factorials = {0: 1};
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push(i);
      factorials[i] = factorials[i - 1] * i;
    }
    const KthComb = [];
    k--;
    while (arr.length > 0) {
      const availableLen = arr.length - 1;
      let swapValue = Math.floor(k / factorials[availableLen]);
      KthComb.push(arr[swapValue]);
      arr.splice(swapValue, 1);
      k = k % factorials[availableLen];
    }
  
    return KthComb.join("");
  };

  let n = 3, k = 3;
  console.log(getPermutation(n,k));