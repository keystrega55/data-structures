// Given integer array nums, return the kth maximum number in this array.
// If the kth maximum does not exist, return the maximum number.
// More info: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3231/

// @param {number[]} nums
// @param {number} k
// @return {number}

var kthMax = function (nums, k) {
    if (nums.length === 0)
        throw RangeError("nums.length must be 1 or greater");
    if (k < 1)
        throw RangeError("k must be 1 or greater");
    if (k === 1 || k > nums.length)
        return Math.max(...nums);

    const maximums = new Set();
    for (let num of nums) {
        maximums.add(num);
        if (maximums.size > k)
            maximums.delete(Math.min(...Array.from(maximums.values())));
    }

    if (maximums.size == k)
        return Math.min(...Array.from(maximums.values()));
    return Math.max(...Array.from(maximums.values()));
};

const nums1 = [3, 2, 1];
const nums2 = [1, 2];
const nums3 = [2, 2, 3, 1];
const nums4 = [0];
const nums5 = [1, 2, 2, 5, 3, 5];
// const nums6 = [];

console.log(kthMax(nums1, 2));
console.log(kthMax(nums2, 2));
console.log(kthMax(nums3, 2));
console.log(kthMax(nums4, 1));
console.log(kthMax(nums5, 2));
