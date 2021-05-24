// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// More info: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/

// @param {number[]} nums
// @return {void} Do not return anything, modify nums in-place instead.

var moveZeroes = function (nums) {
    if (nums.length < 2)
        return;

    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] === 0) {
            nums.splice(i, 1);
            i++;
            j--;
        }
    }

    for (let j = 0; j < i; j++)
        nums.push(0);

};

var moveZeroes2 = function (nums) {
    if (nums.length < 2)
        return;

    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }
    }
};

var moveZeroes1 = function (nums) {
    if (nums.length < 2)
        return;

    let i = 0;
    let j = 0
    while (i < nums.length) {

        if (nums[i] === 0) {
            j = i + 1;
            while (j < nums.length) {
                if (nums[j] != 0) {
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    break;
                }

                j++;
            }
        }

        if (j >= nums.length)
            break;

        i++;
    }

    return;
};

nums1 = [0, 1, 0, 3, 12]

console.log(nums1)
moveZeroes(nums1)
console.log(nums1)
