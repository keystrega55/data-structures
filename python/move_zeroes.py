# Given an integer array nums, move all 0's to the end of it
# while maintaining the relative order of the non-zero elements.
# More info: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/

from typing import List


class Solution:
    def move_zeroes(self, nums: List[int]) -> None:
        if len(nums) < 2:
            return nums

        i = 0
        for j in range(len(nums)):
            if nums[j] != 0:
                nums[i], nums[j] = nums[j], nums[i]
                i += 1

        return nums


nums1 = [0, 1, 0, 3, 12]
sol = Solution()

print(nums1)
print(sol.move_zeroes(nums1))
