/**
 * Implements a singly linked list.
 * More info: https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1298/
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.size = 0;
        this.first = null;
        this.last = null;
    }

    /**
     * @returns {integer}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {boolean}
     */
    isEmpty() {
        return this.size === 0;
    }

    /** Append a node of value val to the last element of the linked list. 
     * @param {integer} value
     * @returns {void}
    */
    addLast(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }

        this.size++;
    }

    /** Add a node of value val before the first element of the linked list. 
     * After the insertion, the new node will be the first node of the linked list. 
     * @param {integer} value
     * @returns {void}
    */
    addFirst(value) {
        let node = new Node(value);

        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            node.next = this.first;
            this.first = node;
        }

        this.size++;
    }

    /** Add a node of value val before the index-th node in the linked list. 
     * If index equals to the length of linked list, the node will be appended 
     * to the end of linked list. If index is greater than the length, 
     * the node will not be inserted. 
     * @param {integer} index
     * @param {integer} value
     * @returns {void}
    */
    addAtIndex(index, value) {
        if (index === 0) {
            this.addFirst(value);
            return;
        }

        if (index === this.size) {
            this.addLast(value);
            return;
        }

        let prev = this.getNode(index - 1);
        if (prev === null) return;

        let current = new Node(value);
        let next = prev.next;
        current.next = next;
        prev.next = current;

        this.size++;
    }

    /** Remove the first (i.e. zero-th) node in the linked list. 
     * If linked list is empty, method returns. 
     * @returns {void}
    */
    removeFirst() {
        if (this.isEmpty()) return;

        if (this.size === 1) {
            this.first = this.last = null;
        }
        else {
            let swap = this.first.next;
            this.first.next = null;
            this.first = swap;
        }

        this.size--;
    }

    /** Remove the last node in the linked list. 
     * If linked list is empty, method returns. 
     * @returns {void}
    */
    removeLast() {
        if (this.isEmpty()) return;

        if (this.size === 1) {
            this.first = this.last = null;
        }
        else {
            let prev = this.getNode(this.size - 2);
            this.last = prev;
            this.last.next = null;
        }

        this.size--;
    }

    /** Remove the index-th node in the linked list. 
     * If linked list is empty or index is negative or index is greater than
     * linked list length, method returns. 
     * @param {integer} index
     * @returns {void}
    */
    removeAtIndex(index) {
        if (this.isEmpty() || index < 0 || index > this.size - 1) {
            return;
        }
        if (index === 0) {
            this.removeFirst();
            return;
        }
        if (index === this.size - 1) {
            this.removeLast();
            return;
        }

        let current = this.getNode(index);
        let previous = this.getNode(index - 1);
        let next = current.next;
        previous.next = next;

        this.size--;

    }

    /** Helper function to return the index-th node in the linked list. 
     * @param {integer} index
     * @returns {Node}
    */
    getNode(index) {
        let current = this.first;
        for (let i = 0; i < index && current !== null; i++) {
            current = current.next;
        }

        return current;
    }

    /** Get the value of the index-th node in the linked list. 
     * If the index is invalid, return -1. 
     * @param {integer} index
     * @returns {integer}
    */
    getNodeValue(index) {
        let current = this.getNode(index);
        return current === null ? -1 : current.value;
    }

    /** Add the value of each node in the linked list to an array, ordered from 
     * first to last. 
     * @returns {string}
    */
    toArray() {
        let array = [];
        let current = this.first;
        while (current !== null) {
            array.push(current.value);
            current = current.next;
        }

        return array;
    }
}

list = new SinglyLinkedList();
console.log(list.toArray());
console.log(list.getSize());
list.addLast(10);
list.addFirst(20);
console.log(list.toArray());
console.log(list.getSize());
list.addAtIndex(1, 30);
console.log(list.toArray());
console.log(list.getSize());
list.addAtIndex(2, 40);
console.log(list.toArray());
console.log(list.getSize());
list.removeAtIndex(2);
console.log(list.toArray());
console.log(list.getSize());
list.removeFirst();
console.log(list.toArray());
console.log(list.getSize());
list.removeLast();
console.log(list.toArray());
console.log(list.getSize());
