// Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.
// More info: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3230/

/*
@param {number[]} nums
@return {number}
*/
var findMaxConsecutiveOnes = function (nums) {
    let longestSequence = 0;
    let currSeq = 0;
    let prevSeq = 0;
    let seenZero = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            seenZero = 1;
            prevSeq = currSeq;
            currSeq = 0;
        }
        else
            currSeq++;

        longestSequence = Math.max(longestSequence, currSeq + prevSeq + seenZero);
    }

    return longestSequence;
};

const nums1 = [1, 0, 1, 1, 0]
const nums2 = [1, 0, 1, 1, 0, 1]
const nums3 = []
const nums4 = [0]
const nums5 = [1]
const nums6 = [0, 0, 0]
const nums7 = [1, 1, 0, 1]
const nums8 = [1, 0, 1, 1, 0, 1, 1, 1]

console.log(findMaxConsecutiveOnes(nums8));
