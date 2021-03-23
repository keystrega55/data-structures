# Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
# The number of elements initialized in nums1 and nums2 are m and n respectively. You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

# Time: O(n)
# Space: O(1)

from typing import List


class ArrayMerger:
    def __init__(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        self.nums1 = nums1
        self.m = m
        self.nums2 = nums2
        self.n = n

# while loop implementation
    def merge_while(self) -> None:
        i = self.m - 1
        j = self.n - 1
        k = self.m + self.n - 1

        while j >= 0:
            if i >= 0 and self.nums1[i] > self.nums2[j]:
                self.nums1[k] = self.nums1[i]
                k -= 1
                i -= 1
            else:
                self.nums1[k] = self.nums2[j]
                k -= 1
                j -= 1

# for loop implementation
    def merge_for(self) -> None:
        i = self.m - 1
        j = self.n - 1

        for k in range(self.m + self.n - 1, -1, -1):
            if (j < 0):
                break
            if i >= 0 and self.nums1[i] > self.nums2[j]:
                self.nums1[k] = nums1[i]
                i -= 1
            else:
                nums1[k] = nums2[j]
                j -= 1


nums1 = [1, 2, 3, 0, 0, 0]
m = 3
nums2 = [2, 5, 6]
n = 3
am = ArrayMerger(nums1, m, nums2, n)
am.merge_while()
# am.merge_for()
print(nums1)
