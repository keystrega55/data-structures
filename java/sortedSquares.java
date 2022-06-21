// Given an integer array "nums" sorted in ascending order, return an array of the squares of each number sorted in ascending order.
// Time: O(n)
// Space: O(n)

class Solution {
    public int[] sortedSquares(int[] nums) {
        if (nums.length == 0)
            return nums;
        
        int[] sortedSquares = new int[nums.length];
        int leftPointer = 0;
        int rightPointer = nums.length - 1;
        
        for (int i = nums.length - 1; i >= 0; i--) {
            int square;
            if (Math.abs(nums[leftPointer]) < Math.abs(nums[rightPointer])) {
                square = nums[rightPointer] * nums[rightPointer];
                rightPointer--;
            }
            else {
                square = nums[leftPointer] * nums[leftPointer];
                leftPointer++;
            }
            sortedSquares[i] = square;
        }
        
        return sortedSquares;
    }
}
