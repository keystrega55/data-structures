// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// More info: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3157/

public void moveZeroes(int[] nums) {
    if (nums.length < 2)
        return;

    int i = 0;
    for (int j = 0; j < nums.length; j++) {
        if (nums[j] != 0) {
            int temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i++;
        }
    }
}
