// Check If N and Its Double Exist
// https://leetcode.com/explore/learn/card/fun-with-arrays/527/searching-for-items-in-an-array/3250/

import java.util.HashSet;
import java.util.Set;

public class CheckIfExist {
    public boolean checkIfExist(int[] arr) {
        Set set = new HashSet();
        for (var i = 0; i < arr.length; i++) {
            if (set.contains(arr[i] * 2)
                    || ((arr[i] % 2 == 0)
                            && set.contains(arr[i] / 2))) {
                return true;
            }
            set.add(arr[i]);
        }

        return false;
    }
}
