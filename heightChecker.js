// More info: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/
// @param {number[]} heights
// @return {number}

var heightChecker = function (heights) {
    let mismatch_count = 0;
    let heights_compare = [...heights].sort((a, b) => a - b);
    heights.forEach((height, i) => {
        if (height !== heights_compare[i])
            mismatch_count++;
    })

    return mismatch_count;
};

let heights1 = [1, 1, 4, 2, 1, 3];
let heights2 = [5, 1, 2, 3, 4];
let heights3 = [1, 2, 3, 4, 5];
let heights4 = [10, 6, 6, 10, 10, 9, 8, 8, 3, 3, 8, 2, 1, 5, 1, 9, 5, 2, 7, 4, 7, 7];

console.log(heightChecker(heights1));
console.log(heightChecker(heights2));
console.log(heightChecker(heights3));
console.log(heightChecker(heights4));
