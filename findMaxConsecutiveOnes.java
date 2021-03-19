// Given a binary array, find the maximum number of consecutive 1s in this array.
// Time: O(n)
// Space: O(1)

class Solution {
  public int findMaxConsecutiveOnes(int[] nums) {
    int count = 0;
    int maxCount = 0;
    for (int num : nums) {
      if (num == 1)
        count ++;
      else {
        maxCount = Math.max(maxCount, count);
        count = 0;
      }
    }
    
      return Math.max(maxCount, count);
  }
}
