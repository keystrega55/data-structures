# Given an array nums of non-negative integers, return 
# an array consisting of all the even elements of 
# nums, followed by all the odd elements of nums.
# More info: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/

from typing import List


class Solution:
    def sort_array_by_parity(self, nums: List[int]) -> List[int]:
        evens = [num for num in nums if num % 2 == 0]
        odds = [num for num in nums if num % 2 != 0]

        return (evens+odds)

    def sort_array_by_parity1(self, nums: List[int]) -> List[int]:
        if len(nums) < 2:
            return nums

        i = 0
        j = len(nums) - 1
        while i < j:
            if (nums[i] % 2 != 0):
                nums[i], nums[j] = nums[j], nums[i]
                j -= 1
            else:
                i += 1

        return nums


sol = Solution()
nums1 = [3, 1, 2, 4]

print(sol.sort_array_by_parity(nums1))
