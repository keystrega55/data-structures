// Given a binary array, find the maximum number of consecutive 1s in this array.
// Time: O(n)
// Space: O(1)

class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int max = 0;
        int count = 0;
        for (int num : nums) {
            if (num == 1) {
                count++;
                if (count > max)
                    max = count;
            }
            else
                count = 0;
        }
        
        return max;
    }
}
