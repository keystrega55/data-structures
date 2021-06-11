import java.util.Arrays;

/**
 * Implements a singly linked list.
 * More info: https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1298/
 */

public class SinglyLinkedList {
    private class Node {
        private int value;
        private Node next;

        public Node(int value) {
            this.value = value;
        }
    }

    private Node first;
    private Node last;
    private int size;

    public int getSize() {
        return size;
    }

    public boolean isEmpty() {
        return getSize() == 0;
    }

    /** Get the value of the index-th node in the linked list. If the index is invalid, return -1. */
    public int getNodeValue(int index) {
        var current = getNode(index);
        return current == null ? -1 : current.value;
    }

    /** Helper function to return the index-th node in the linked list. */
    private Node getNode(int index) {
        var current = first;
        for (var i = 0; i < index && current != null; i++)
            current = current.next;

        return current;
    }

    /** Add the value of each node in the linked list to an array, ordered from first to last. */
    public String toArray() {
        var array = new int[getSize()];
        var current = first;
        for (var i = 0; i < getSize(); i++) {
            array[i] = current.value;
            current = current.next;
        }

        return Arrays.toString(array);
    }

    /** Add a node of value before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. */
    public void addFirst(int val) {
        var node = new Node(val);

        if (isEmpty())
            first = last = node;
        else {
            node.next = first;
            first = node;
        }

        size++;
    }

    /** Append a node of value to the last element of the linked list. */
    public void addLast(int value) {
        var node = new Node(value);

        if (isEmpty())
            first = last = node;
        else {
            last.next = node;
            last = node;
        }

        size++;
    }

    /** Add a node of value before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. */
    public void addAtIndex(int index, int value) {
        if (index < 0 || index > getSize())
            throw new IndexOutOfBoundsException("Index must be between zero and linked list length (inclusive).");

        var node = new Node(value);

        if (index == 0) {
            addFirst(value);
            return;
        }
        if (index == getSize()) {
            addLast(value);
            return;
        }

        var current = new Node(value);
        var previous = getNode(index - 1);
        var next = previous.next;
        current.next = next;
        previous.next = current;

        size++;
    }

    /** Remove the first node of the linked list and return its value. */
    public int removeFirst() {
        if (isEmpty())
            throw new IllegalStateException("Linked list is empty.");

        var removedNodeValue = first.value;
        if (getSize() == 1)
            first = last = null;
        else {
            var swap = first.next;
            first.next = null;
            first = swap;
        }

        size--;
        return removedNodeValue;
    }

    /** Remove the last node of the linked list and return its value. */
    public int removeLast() {
        if (isEmpty())
            throw new IllegalStateException("Linked list is empty.");

        var removedNodeValue = last.value;
        if (getSize() == 1)
            first = last = null;
        else {
            var previous = getNode(getSize() - 2);
            last = previous;
            last.next = null;
        }

        size--;
        return removedNodeValue;
    }

    /** Remove the index-th node in the linked list, if the index is valid, and return its value. */
    public int removeAtIndex(int index) {
        if (isEmpty())
            throw new IllegalStateException("Linked list is empty.");
        if (index < 0 || index > getSize())
            throw new IndexOutOfBoundsException("Index must be between zero and linked list length (inclusive).");

        if (index == 0)
            removeFirst();
        if (index == getSize())
            removeLast();

        var previous = getNode(index - 1);
        var current = previous.next;
        previous.next = current.next;
        current.next = null;

        size--;
        return current.value;
    }
}

public class Main {

    public static void main(String[] args) {
        var list = new SinglyLinkedList();
        System.out.println(list.toArray());
        System.out.println(list.getSize());
        list.addLast(10);
        list.addFirst(20);
        System.out.println(list.toArray());
        System.out.println(list.getSize());
        list.addAtIndex(1, 30);
        System.out.println(list.toArray());
        System.out.println(list.getSize());
        list.addAtIndex(2, 40);
        System.out.println(list.toArray());
        System.out.println(list.getSize());
        System.out.println(list.removeAtIndex(2));
        System.out.println(list.toArray());
        System.out.println(list.getSize());
        list.removeFirst();
        System.out.println(list.toArray());
        System.out.println(list.getSize());
        list.removeLast();
        System.out.println(list.toArray());
        System.out.println(list.getSize());
    }
}
