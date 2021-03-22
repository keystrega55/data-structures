// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively. 
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.

// Time: O(n)
// Space: O(1)

class ArrayMerger {
    constructor(nums1, m, nums2, n) {
        this.nums1 = nums1;
        this.m = m;
        this.nums2 = nums2;
        this.n = n;
    }

    // while loop implementation
    mergeWhile() {
        let i = m - 1;
        let j = n - 1;
        let k = m + n - 1;

        while (j >= 0) {
            if (i >= 0 && this.nums1[i] > this.nums2[j])
                this.nums1[k--] = this.nums1[i--];
            else
                this.nums1[k--] = this.nums2[j--];
        }
    }

    // for loop implementation
    mergeFor() {
        let i = m - 1;
        let j = n - 1;

        for (let k = m + n - 1; k >= 0; k--) {
            if (j < 0)
                break;
            if (i >= 0 && this.nums1[i] > this.nums2[j])
                this.nums1[k] = this.nums1[i--];
            else
                this.nums1[k] = this.nums2[j--];
        }
    }
}


let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
const m = 3;
const n = 3
const am = new ArrayMerger(nums1, m, nums2, n);

console.log(nums1);
am.mergeWhile();
// am.mergeFor();
console.log(am.nums1);
