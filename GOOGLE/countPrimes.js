// Sieve of Eratosthenes Algorithm

var countPrimes = function (n) {
    let hashArray = new Array(n).fill(true);

    hashArray[0] = false, hashArray[1] = false;

    for (let i = 2; i * i < n; i++) {
        for (let j = i * i; j < n; j += i) {
            hashArray[j] = false;
        }
    }

    return hashArray.filter((num) => num == true).length;
};

Input: n = 10
Output: 4
// Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.