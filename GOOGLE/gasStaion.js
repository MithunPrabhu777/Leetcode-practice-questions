var canCompleteCircuit = function (gas, cost) {

    let totalCost = 0;
    let currentCost = 0;
    let potentialGasStation = 0;

    for (let i = 0; i < gas.length; i++) {
        let netCost = gas[i] - cost[i];
        totalCost += netCost;
        currentCost += netCost;
        if (currentCost < 0) {
            potentialGasStation = i + 1;
            currentCost = 0;
        }
    }

    return totalCost < 0 ? -1 : potentialGasStation;

};

Input: gas = [1, 2, 3, 4, 5], cost = [3, 4, 5, 1, 2]
Output: 3