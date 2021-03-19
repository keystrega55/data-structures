# Given a binary array, find the maximum number of consecutive 1s in this array.
# Time: O(n)
# Space: O(1)

def findMaxConsecutiveOnes(nums):
    count = 0
    max_count = 0
    for num in nums:
        if num == 1:
            count += 1
        else:
            max_count = max(max_count, count)
            count = 0

    return max(max_count, count)


nums = [1, 0, 1, 1, 0, 1]
print(findMaxConsecutiveOnes(nums))
