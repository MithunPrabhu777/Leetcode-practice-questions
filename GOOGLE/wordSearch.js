var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, i, j, word)) return true;
        }
    }

    return false;

    function dfs(board, row, col, remain) {

        if (remain.length === 0) return true;

        if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return false;

        if (board[row][col] !== remain[0]) return false;

        let char = board[row][col];
        board[row][col] = "-";

        let result = (dfs(board, row + 1, col, remain.substring(1)) || dfs(board, row, col + 1, remain.substring(1)) || dfs(board, row - 1, col, remain.substring(1)) || dfs(board, row, col - 1, remain.substring(1)));

        board[row][col] = char;

        return result;

    }
};

let board = [["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]];
word = "ABCB";
console.log(exist(board, word));