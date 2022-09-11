const INF = 2 ** 31 - 1;
const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function wallsAndGates(rooms) {
    const queue = [];

    for (let i = 0; i < rooms.length; ++i) {
        for (let j = 0; j < rooms[0].length; ++j) {
            if (rooms[i][j] === 0) {
                queue.push([i, j]);
            }
        }
    }

    let count = 1;

    while (queue.length) {
        let length = queue.length;

        while (length--) {
            [i, j] = queue.shift();

            for ([k, l] of DIRECTIONS) {
                k += i;
                l += j;
                if (inBounds(rooms, k, l) && rooms[k][l] === INF) {
                    rooms[k][l] = count;
                    queue.push([k, l]);
                }
            }
        }

        ++count;
    }

    return rooms;
}

/**
 * @param {number[][]} rooms
 * @param {number} i
 * @param {number} j
 * @return {boolean}
 */
function inBounds(rooms, i, j) {
    return i >= 0 && j >= 0 && i < rooms.length && j < rooms[0].length;
}

let rooms = [[0,0,2**31-1],[0,0,2**31-1],[0,0,0]];
console.log(wallsAndGates(rooms));
