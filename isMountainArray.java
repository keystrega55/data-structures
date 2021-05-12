// Given an array of integers arr, return true if and only if it is a valid mountain array.
// More info: https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3251/

public class ArrayUtils {
    public boolean isMountainArray(int[] arr) {
        if (arr.length < 3)
            return false;

        var goingDown = false;
      
        // Check that the array starts by going up
        var goingUp = arr[0] < arr[1];
        if (!goingUp)
            return false;

        // Assume array elements are >= 0  
        var prevVal = -1;
        for (var elem : arr) {
            // Continue going up
            if ((elem > prevVal) && goingUp)
                prevVal = elem;
            // Mark that we have reached the
            // peak of the mountain array
            // and we are now going down
            else if ((elem < prevVal) && goingUp) {
                goingUp = false;
                goingDown = true;
                prevVal = elem;
            }
            // Continue going down
            else if ((elem < prevVal) && goingDown)
                prevVal = elem;
            else
                return false;
        }

        return !goingUp && goingDown;
    }
}
