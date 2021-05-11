# Given an array of integers arr, return true if and only if it is a valid mountain array.
# More info: https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/

class Solution:
    def is_mountain_array(self, arr: list([int])) -> bool:
        if len(arr) < 3:
            return False

        going_down = False
        going_up = arr[0] < arr[1]
        if not going_up:
            return False

        prev_val = -1
        for elem in arr:
            if elem > prev_val and going_up:
                prev_val = elem
            elif elem < prev_val and going_up:
                going_up = False
                going_down = True
                prev_val = elem
            elif elem < prev_val and going_down:
                prev_val = elem
            else:
                return False

        return not going_up and going_down


sol = Solution()

# Tests
arr1 = [2, 1]
arr2 = [3, 5, 5]
arr3 = [0, 3, 2, 1]
arr4 = [3, 2, 1, 2]
arr5 = [1, 2, 3]

print(sol.is_mountain_array(arr1))
