var generate = function (numRows) {
  let rows = [[1]];

  for (let i = 1; i < numRows; i++) {
    let prevRows = rows[i - 1];
    rows[i] = [...prevRows, 1];

    for (let j = 1; j < rows[i].length - 1; j++) {
      rows[i][j] = prevRows[j - 1] + prevRows[j];
    }
  }

  return rows;
};

Input: numRows = 5;
Output: [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]];
