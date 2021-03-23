// Custom integer array (int[]) class, based on specifications from
//  https://leetcode.com/explore/learn/card/fun-with-arrays/

import java.util.Arrays;

public class Arrae {
    private int[] numbers;
    private int size;

    public Arrae(int capacity) {
        this.numbers = new int[capacity];
        this.size = 0;
    }

//   Time: O(n)
//   Space: O(1) -> O(n)
    public void insert(int number, int index) {
        if (index < 0 || index > size)
            throw new IndexOutOfBoundsException();

        resizeIfRequired();

        if (index <= size)
            for (var i = size - 1; i >= index; i--)
                numbers[i + 1] = numbers[i];

        numbers[index] = number;
        size++;
    }

//   Time: O(n)
//   Space: O(n)
    private void resizeIfRequired() {
        if (isFull()) {
            var numbers2 = new int[((int) (size * 1.5))];
            for (int i = 0; i < size; i++)
                numbers2[i] = numbers[i];
            numbers = numbers2;
        }
    }

//   Time: O(n)
//   Space: O(1)
    public int remove(int index) {
        if (index < 0 || index > size - 1)
            throw new IndexOutOfBoundsException();

        if (isEmpty())
            throw new IllegalStateException();

        int removed = numbers[index];

        if (index < size - 1) {
            for (var i = index; i < size - 1; i++)
                numbers[i] = numbers[i + 1];
        }

        numbers[--size] = 0;
        return removed;
    }

    public int getSize() {
        return size;
    }

    public boolean isEmpty() {
        return size == 0;
    }

    public boolean isFull() {
        return size == numbers.length;
    }

    @Override
    public String toString() {
        return Arrays.toString(numbers);
    }
}
