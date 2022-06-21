# Given integer array nums, return the kth maximum number in this array.
# If the kth maximum does not exist, return the maximum number.
# More info: https://leetcode.com/problems/third-maximum-number/

from typing import List


class Solution:
    def kthMax(self, nums: List[int], k) -> int:
        if len(nums) == 0:
            raise IndexError('len(nums) must be 1 or greater')
        if k < 1 or k > len(nums):
            raise IndexError(
                'k must be between 1 (1st largest max number) and len(nums) (inclusive)')
        if k == 1:
            return max(nums)

        maximums = set()
        for num in nums:
            maximums.add(num)
            if len(maximums) > k:
                maximums.remove(min(maximums))

        if len(maximums) == k:
            return min(maximums)
        return max(maximums)

    def thirdMax(self, nums: List[int]) -> int:
        maximums = set()
        for num in nums:
            maximums.add(num)
            if len(maximums) > 3:
                maximums.remove(min(maximums))
        if len(maximums) == 3:
            return min(maximums)
        return max(maximums)

    def thirdMax1(self, nums: List[int]) -> int:
        if len(nums) < 3:
            return max(nums[0], nums[-1])

        first = max(nums[0], nums[1])
        second = min(nums[0], nums[1])
        third = second
        for i in range(2, len(nums)):
            if nums[i] > first:
                third = second
                second = first
                first = nums[i]
            elif (nums[i] < first) and (nums[i] > second):
                third = second
                second = nums[i]
            elif (nums[i] < second):
                if (third == second) or (nums[i] > third):
                    third = nums[i]

        if (third < second) and (second < first):
            return third
        else:
            return first


nums1 = [3, 2, 1]
nums2 = [1, 2]
nums3 = [2, 2, 3, 1]
nums4 = [0]
nums5 = [1, 2, 2, 5, 3, 5]

sol = Solution()
print(sol.kthMax(nums1, 3))
