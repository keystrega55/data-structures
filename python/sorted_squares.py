# Given an integer array nums sorted in increasing order, return an array of the squares of each number sorted in increasing order.
# Time: O(n)
# Space: O(1) or O(n) if output included
# https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3574/

from typing import List


class Solution:
    def sorted_squares(self, nums: List[int]) -> List[int]:
        return list(sorted([x*x for x in nums]))

    def sorted_squares1(self, nums: List[int]) -> List[int]:
        if len(nums) == 0:
            return nums

        num_list = list(nums)
        sorted_squares = [None] * len(nums)
        left_pointer = 0
        right_pointer = len(nums) - 1

        for i, num in reversed(list(enumerate(nums))):
            square = 0
            if abs(nums[left_pointer]) < abs(nums[right_pointer]):
                square = nums[right_pointer] * nums[right_pointer]
                right_pointer -= 1
            else:
                square = nums[left_pointer] * nums[left_pointer]
                left_pointer += 1
            sorted_squares[i] = square

        return sorted_squares


nums1 = [-4, -1, 0, 3, 10]

sol = Solution()
print(sol.sorted_squares(nums1))
