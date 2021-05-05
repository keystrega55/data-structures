# Check If N and Its Double Exist
# https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

class Solution:
    def __init__(self) -> None:
        self.ad = {}

    def check_if_exist(self, arr) -> bool:
        for i, n in enumerate(arr):
            if ((n * 2) in self.ad.values()) or ((n % 2 == 0) and (n / 2) in self.ad.values()):
                return True
            self.ad[i] = n

        return False


sol = Solution()

my_list = [3, 1, 7, 11]
print(my_list)
out = sol.check_if_exist(my_list)
print(out)
