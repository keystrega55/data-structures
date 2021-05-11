// Given an array of integers arr, return true if and only if it is a valid mountain array.
// More info: https://leetcode.com/problems/valid-mountain-array/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var isMountainArray = function (arr) {
    if (arr.length < 3)
        return false;

    let going_down = false;

    // Check that the array starts by going up
    let going_up = arr[0] < arr[1]
    if (!going_up)
        return false;

    // Assume array elements are >= 0
    let prev_val = -1

    for (let elem of arr) {
        // Continue going up
        if ((elem > prev_val) && going_up)
            prev_val = elem;
        // Mark that we have reached the
        // peak of the mountain array
        // and we are now going down
        else if ((elem < prev_val) && going_up) {
            going_up = false;
            going_down = true;
            prev_val = elem;
        }
        // Continue going down
        else if ((elem < prev_val) && going_down)
            prev_val = elem;
        else
            return false;
    }

    return !going_up && going_down
};

// Tests
const arr1 = [2, 1]
const arr2 = [3, 5, 5]
const arr3 = [0, 3, 2, 1]
const arr4 = [3, 2, 1, 2]
const arr5 = [1, 2, 3]

console.log(isMountainArray(arr1))
