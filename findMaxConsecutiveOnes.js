// Given a binary array, find the maximum number of consecutive 1s in this array.
// Time: O(n)
// Space: O(1)

/**
 * @param {number[]} nums
 * @return {number}
 */

const nums = [1, 0, 1, 1, 0, 1];
console.log(findMaxConsecutiveOnes(nums));

function findMaxConsecutiveOnes(nums) {
    let count = 0;
    let maxCount = 0;
    for (num of nums) {
        if (num == 1)
            count++;
        else {
            maxCount = Math.max(maxCount, count);
            count = 0;
        }
    }

    return Math.max(maxCount, count);
};
