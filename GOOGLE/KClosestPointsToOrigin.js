const kClosest = (points, K) => {

    let result = [];
    let priority = [];

    for (let [x1, y1] of points) {
        let distance = Math.sqrt(Math.abs(x1) ** 2 + (Math.abs(y1) ** 2));
        priority.push([distance, x1, y1]);
    }

    let heapifiedArray = priority.sort((a, b) => a[0] - b[0]);

    for ([priority, x1, y1] of heapifiedArray) {
        if (K === 0) {
            return result;
        }
        result.push([x1, y1]);
        K--;
    }

    if (K === 0) return result;
};

let points = [[0, 1], [1, 0]], k = 2;
console.log(kClosest(points, k));
Output: [[-2, 2]]