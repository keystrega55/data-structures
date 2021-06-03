// Given integer array nums, return the kth maximum number in this array.
// If the kth maximum does not exist, return the maximum number.
// More info: https://leetcode.com/problems/third-maximum-number/

import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class ArrayUtils {
    public int kthMax(int[] nums, int k) {
        if (nums.length == 0)
            throw new IndexOutOfBoundsException("nums.length must be 1 or greater");
        if (k < 1)
            throw new IndexOutOfBoundsException("k must be 1 or greater");
        if (k == 1 || k > nums.length)
            return Arrays.stream(nums).max().getAsInt();

        Set maximums = new HashSet();
        for (int num : nums) {
            maximums.add(num);
            if (maximums.size() > k)
                maximums.remove(Collections.min(maximums));
        }

        if (maximums.size() == k)
            return (int) Collections.min(maximums);
        return (int) Collections.max(maximums);
    }
}
