var dailyTemperatures = function (temperatures) {
    let array = new Array(temperatures.length).fill(0);

    let i = 0;
    let j = 1;

    while (i < j && i < temperatures.length - 1) {
        if (temperatures[i] < temperatures[j]) {
            array[i] = j - i;
            i++;
            j = i + 1;
        } else {
            j++;
        }
    }

    return array;
};

let temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
Output: [1, 1, 4, 2, 1, 1, 0, 0]