const restoreMatrix = (rowSum, colSum) => {
  
    const n = rowSum.length, m = colSum.length;
    
    // generate 2D Matrix filled with 0's
    const matrix = Array.from(Array(n), () => new Array(m).fill(0));
    
    for(let i = 0; i < n; i++){
      for(let j = 0; j < m; j++){
        let val = Math.min(rowSum[i], colSum[j]);
        matrix[i][j] = val;
        rowSum[i] -= val;
        colSum[j] -= val;
      }
    }
    return matrix;
};

let rowSum = [5,7,10], colSum = [8,6,8];
console.log(restoreMatrix(rowSum,colSum));
