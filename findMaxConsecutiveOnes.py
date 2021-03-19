# Given a binary array, find the maximum number of consecutive 1s in this array.
# Time: O(n)
# Space: O(1)

def findMaxConsecutiveOnes(nums):
    return max(map(len, ''.join(map(str, nums)).split('0')))


nums = [1, 0, 1, 1, 0, 1]
print(findMaxConsecutiveOnes(nums))
