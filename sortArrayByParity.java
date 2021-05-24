// Given an array nums of non-negative integers, return 
// an array consisting of all the even elements of 
// nums, followed by all the odd elements of nums.
// More info: https://leetcode.com/explore/learn/card/fun-with-arrays/511/in-place-operations/3260/

public int[] sortArrayByParity(int[] nums) {
        if (nums.length < 2)
            return nums;

        int i = 0;
        int j = nums.length - 1;
        while (i < j) {
            if (nums[i] % 2 != 0) {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j--] = temp;
            }
            else
                i++;
        }

        return nums;
    }

    public int[] sortArrayByParity1(int[] nums) {
        if (nums.length < 2)
            return nums;

        int i = 0;
        int j = nums.length - 1;
        while (i < j) {
            if (isEven(nums[i])) {
                if (!isEven(nums[j]))
                    j--;
                i++;
            }
            else {
                if (isEven(nums[j])) {
                    int temp = nums[i];
                    nums[i++] = nums[j];
                    nums[j] = temp;
                }
                j--;
            }
        }

        return nums;
    }

    public boolean isEven(int num) {
        return num % 2 == 0;
    }
