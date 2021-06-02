// Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.
// More info: https://leetcode.com/explore/learn/card/fun-with-arrays/523/conclusion/3230/

public class Solution {
  public int findMaxConsecutiveOnes(int[] nums) {
        int longestSequence = 0;
        int currSeq = 0;
        int prevSeq = 0;
        int seenZero = 0;

        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                seenZero = 1;
                prevSeq = currSeq;
                currSeq = 0;
            }
            else
                currSeq++;

            longestSequence = Math.max(longestSequence, currSeq + prevSeq + seenZero);
        }

        return longestSequence;
    }
}
