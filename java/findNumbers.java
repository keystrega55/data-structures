// Given an array "nums" of integers, return how many integers contain an even number of digits
// Time: O(n)
// Space: O(1)

class Solution {
    public int findNumbers(int[] nums) {
        int even_digit_nums = 0;
        
        for (int num : nums) {
            if (countDigits(num))
                even_digit_nums++;
        }
        
        return even_digit_nums;
    }
    
    private boolean countDigits(int num) {
        int digit_count = 0;
        
        while (num >= 1) {
                num = num / 10;
                digit_count++;
            }
            
        if (digit_count % 2 == 0)
            return true;
        
        return false;
    }
}
