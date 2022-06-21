// Given an array nums of n integers where nums[i] is in 
// the range [1, n], return an array of all the integers 
// in the range [1, n] that do not appear in nums.
// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

public class ArrayUtils {
    public List<Integer> getMissingNums(int[] nums) {
        for (int i = 0; i < nums.length; i++) {
            int newIndex = Math.abs(nums[i]) - 1;
            if (nums[newIndex] > 0)
                nums[newIndex] *= -1;
        }

        List<Integer> result = new LinkedList<Integer>();
        for (int i = 1; i <= nums.length; i++) {
            if (nums[i - 1] > 0)
                result.add(i);
        }

        return result;
    }

    public List<Integer> getMissingNums1(int[] nums) {
        HashMap<Integer, Boolean> hashTable = new HashMap<Integer, Boolean>();
        for (int i = 0; i < nums.length; i++)
            hashTable.put(nums[i], true);

        List<Integer> result = new LinkedList<Integer>();
        for (int i = 1; i <= nums.length; i++) {
            if (!hashTable.containsKey(i))
                result.add(i);
        }

        return result;
    }
}
