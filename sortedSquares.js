// Given an integer array "nums" sorted in ascending order, return an array of the squares of each number sorted in ascending order.
// Time: O(n)
// Space: O(n)

nums = [-4, -1, 0, 3, 10];
console.log(sortedSquares(nums));

function sortedSquares(nums) {
    if (!nums) {
        return [];
    }

    let result = new Array(nums.length);
    let leftPtr = 0;
    let rightPtr = nums.length - 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        let square;
        if (Math.abs(nums[leftPtr]) < Math.abs(nums[rightPtr])) {
            square = nums[rightPtr] * nums[rightPtr];
            rightPtr--;
        } else {
            square = nums[leftPtr] * nums[leftPtr];
            leftPtr++;
        }
        result[i] = square;
    }
    return result;
};
