// Check If N and Its Double Exist
// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

// @param {number[]} arr
// @return {boolean}

var checkIfExist = function (arr) {
    const set = new Set([]);
    for (i = 0; i < arr.length; i++) {
        if (set.has(arr[i] * 2) || ((arr[i] % 2 === 0) && set.has(arr[i] / 2))) {
            return true;
        }
        set.add(arr[i]);
    }

    return false;
};

arr1 = [10, 2, 5, 3]
arr2 = [7, 1, 14, 11]
arr3 = [3, 1, 7, 11]

console.log(arr1)
console.log(checkIfExist(arr1))
console.log(arr2)
console.log(checkIfExist(arr2))
console.log(arr3)
console.log(checkIfExist(arr3))
