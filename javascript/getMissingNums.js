// Given an array nums of n integers where nums[i] is in 
// the range [1, n], return an array of all the integers 
// in the range [1, n] that do not appear in nums.
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

//  @param {number[]} nums
//  @return {number[]}
var getMissingNums = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        const newIndex = Math.abs(nums[i]) - 1;
        if (nums[newIndex] > 0)
            nums[newIndex] *= -1;
    }

    const result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (nums[i - 1] > 0)
            result.push(i);
    }

    return result;
};

//  @param {number[]} nums
//  @return {number[]}
var getMissingNums1 = function (nums) {
    const mySet = new Set();
    for (let i = 0; i < nums.length; i++)
        mySet.add(nums[i]);

    const result = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!mySet.has(i))
            result.push(i);
    }

    return result;
}

const nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
// console.log(getMissingNums(nums1));
console.log(getMissingNums1(nums1));
