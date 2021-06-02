# Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.
# https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3230/

from typing import List


class Solution:
    def find_max_consecutive_ones(self, nums: List[int]) -> int:
        zeroes_count = 0
        longest_sequence = 0
        left_index, right_index = 0, 0

        while right_index < len(nums):
            if nums[right_index] == 0:
                zeroes_count += 1

            while zeroes_count > 1:
                if nums[left_index] == 0:
                    zeroes_count -= 1
                left_index += 1

            longest_sequence = max(
                longest_sequence, right_index - left_index + 1)
            right_index += 1

        return longest_sequence


nums1 = [1, 0, 1, 1, 0]
nums2 = [1, 0, 1, 1, 0, 1]
nums3 = []
nums4 = [0]
nums5 = [1]
nums6 = [0, 0, 0]
nums7 = [1, 1, 0, 1]
nums8 = [1, 0, 1, 1, 0, 1, 1, 1]
sol = Solution()
print(sol.find_max_consecutive_ones(nums8))
