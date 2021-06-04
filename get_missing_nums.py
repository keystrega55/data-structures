# Given an array nums of n integers where nums[i] is in
# the range [1, n], return an array of all the integers
# in the range [1, n] that do not appear in nums.
# https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

from typing import List


class Solution:
    def get_missing_nums(self, nums: List[int]) -> List[int]:
        for i in range(len(nums)):
            new_index = abs(nums[i]) - 1
            if nums[new_index] > 0:
                nums[new_index] *= -1

        result = []
        for i in range(1, len(nums) + 1):
            if nums[i - 1] > 0:
                result.append(i)

        return result

    def get_missing_nums1(self, nums: List[int]) -> List[int]:
        my_dict = {}
        for num in nums:
            my_dict[num] = 1

        missing_nums = []
        for num in range(1, len(nums) + 1):
            if num not in my_dict:
                missing_nums.append(num)

        return missing_nums


nums1 = [4, 3, 2, 7, 8, 2, 3, 1]
nums2 = [1, 1]

sol = Solution()
print(sol.get_missing_nums(nums1))
