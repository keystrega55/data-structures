# More info: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3228/

from typing import List


class Solution:
    def height_checker(self, heights: List[int]) -> int:
        return sum(1 for x, y in zip(heights, sorted(heights)) if x != y)

    def height_checker1(self, heights: List[int]) -> int:
        mismatch_count = 0
        heights_compare = sorted(heights)
        for i in range(len(heights)):
            if heights[i] != heights_compare[i]:
                mismatch_count += 1

        return mismatch_count


heights1 = [1, 1, 4, 2, 1, 3]
heights2 = [5, 1, 2, 3, 4]
heights3 = [1, 2, 3, 4, 5]

sol = Solution()
print(sol.height_checker(heights1))
print(sol.height_checker(heights2))
print(sol.height_checker(heights3))
