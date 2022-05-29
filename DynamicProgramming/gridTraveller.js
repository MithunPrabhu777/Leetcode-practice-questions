// const gridTraveller = (row,col) => {

//     if(row == 1 && col == 1) return  1;

//     if(row == 0 || col == 0) return 0;

//     return gridTraveller(row,col-1) + gridTraveller(row-1,col);
// }

// console.log(gridTraveller(18,18));


const gridTraveller = (row,col,memo = {}) => {

    let key = `${row}-${col}`
    if(row == 1 && col == 1) return 1;

    if(row == 0 || col == 0) return 0;
    

    if(memo[key]){
        return memo[key];
    }

    memo[key] = gridTraveller(row,col - 1,memo) + gridTraveller(row - 1, col,memo);

    return memo[key];
}

console.log(gridTraveller(3,3));