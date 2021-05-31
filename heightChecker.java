// More info: https://leetcode.com/submissions/detail/500862136/?from=explore&item_id=3228

public class ArrayUtils {
    public int heightChecker(int[] heights) {
        int mismatch_count = 0;
        var heights_compare = Arrays.copyOf(heights, heights.length);
        Arrays.sort(heights_compare);

        for (int i = 0; i < heights.length; i++) {
            if (heights[i] != heights_compare[i])
                mismatch_count++;
        }

        return mismatch_count;
    }
}
