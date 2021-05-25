# Given an array nums and a value val, remove all instances
# of that value in-place and return the new length.
# More info: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/

from typing import List


class Solution:
    def remove_element(self, nums: List[int], val: int) -> int:
        for x in range(nums.count(val)):
            nums.remove(val)

        return len(nums)

    def remove_element1(self, nums: List[int], val: int) -> int:
        new_len = len(nums)
        i = len(nums) - 1
        j = 0

        while i > -1:
            if nums[i] == val:
                new_len -= 1
                j = i
                while j < new_len:
                    nums[j] = nums[j + 1]
                    j += 1
            i -= 1

        return new_len


sol = Solution()
nums1 = [0, 1, 2, 2, 3, 0, 4, 2]
print(sol.remove_element(nums1, 2))
