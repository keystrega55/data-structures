/*
Given an array nums and a value val, remove all instances 
of that value in-place and return the new length.
More info: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3575/
*/

public int removeElement(int[] nums, int val) {
    int length = nums.length;
    for (int i = 0; i < length; i++) {
        if (nums[i] == val)
            nums[i--] = nums[--length];
    }

    return length;
}
