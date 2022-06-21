/*
Given an array nums of non-negative integers, return 
an array consisting of all the even elements of 
nums, followed by all the odd elements of nums.
More info: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/
*/

/*
@param {number[]} nums
@return {number[]}
*/

var sortArrayByParity = function (nums) {
    const evens = nums.filter(num => num % 2 === 0);
    const odds = nums.filter(num => num % 2 !== 0);
    return [...evens, ...odds];
};

var sortArrayByParity2 = function (nums) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] % 2 !== 0) {
            nums.push(nums[i]);
            nums.splice(i, 1);
            i--;
            len--;
        }
    }

    return nums;
};

var sortArrayByParity1 = function (nums) {
    if (nums.length < 2)
        return nums;

    let i = 0;
    let j = nums.length - 1;
    while (i < j) {
        if (isEven(nums[i])) {
            if (!isEven(nums[j]))
                j--;
            i++;
        }
        else {
            if (isEven(nums[j])) {
                [nums[i], nums[j]] = [nums[j], nums[i]];
                i++;
            }
            j--;
        }
    }

    return nums;
};

var isEven = function (num) {
    return num % 2 === 0;
};

nums1 = [3, 1, 2, 4]
console.log(nums1)
sortArrayByParity(nums1)
console.log(nums1)
