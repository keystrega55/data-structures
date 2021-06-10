# Implements a singly linked list.
# More info: https://leetcode.com/explore/learn/card/linked-list/209/singly-linked-list/1298/
from typing import List


class Node:
    def __init__(self, value: int) -> None:
        self.value = value
        self.next = None


class SinglyLinkedList:
    def __init__(self) -> None:
        self.size = 0
        self.first = None
        self.last = None

    def get_size(self) -> int:
        return self.size

    def is_empty(self) -> bool:
        return self.get_size() == 0

    def add_last(self, value: int) -> None:
        node = Node(value)
        if self.is_empty():
            self.first = self.last = node
        else:
            self.last.next = node
            self.last = node

        self.size += 1
        return

    def add_first(self, value: int) -> None:
        node = Node(value)
        if self.is_empty():
            self.first = self.last = node
        else:
            node.next = self.first
            self.first = node

        self.size += 1
        return

    def add_at_index(self, index: int, value: int) -> None:
        try:
            if self.is_empty() or index < 0 or index > self.get_size() - 1:
                raise IndexError()
        except IndexError:
            print(
                "Index Error: Index must be between zero and linked list length (inclusive).")
        else:
            if index == 0:
                self.add_first(value)
            if index == self.get_size():
                self.add_last(value)

            current = Node(value)
            previous = self.get_node(index - 1)
            next = previous.next
            current.next = next
            previous.next = current

            self.size += 1
            return

    def remove_last(self) -> int:
        try:
            if self.is_empty():
                raise RuntimeError()
        except RuntimeError:
            print("Error: Linked list is empty.")
        else:
            removed_node_value = self.last.value
            if self.get_size() == 1:
                self.first = self.last = None
            else:
                previous = self.get_node(self.get_size() - 2)
                self.last = previous
                self.last.next = None

            self.size -= 1
            return removed_node_value

    def remove_first(self) -> int:
        try:
            if self.is_empty():
                raise RuntimeError()
        except RuntimeError:
            print("Error: Linked list is empty.")
        else:
            removed_node_value = self.first.value
            if self.get_size() == 1:
                self.first = self.last = None
            else:
                swap = self.first.next
                self.first.next = None
                self.first = swap

            self.size -= 1
            return removed_node_value

    def remove_at_index(self, index: int) -> int:
        try:
            if self.is_empty():
                raise RuntimeError()
            if index < 0 or index > self.get_size() - 1:
                raise IndexError()
        except RuntimeError:
            print("Error: Linked list is empty.")
        except IndexError:
            print(
                "Index Error: Index must be between zero and linked list length (inclusive).")
        else:
            if index == 0:
                self.remove_first()
            if index == self.get_size() - 1:
                self.remove_last()

            current = self.get_node(index)
            previous = self.get_node(index - 1)
            next = current.next
            previous.next = next

            self.size -= 1
            return current.value

    def get_node(self, index: int) -> Node:
        current = self.first
        for i in range(index):
            if current is not None:
                current = current.next
            else:
                break

        return current

    def get_node_value(self, index: int) -> int:
        current = self.get_node(index)
        if current is None:
            return -1
        else:
            return current.value

    def to_array(self) -> List[int]:
        array = []
        current = self.first
        while current is not None:
            array.append(current.value)
            current = current.next

        return array


my_list = SinglyLinkedList()
print(my_list.to_array())
print(my_list.get_size())
my_list.add_last(10)
my_list.add_first(20)
print(my_list.to_array())
print(my_list.get_size())
my_list.add_at_index(1, 30)
print(my_list.to_array())
print(my_list.get_size())
my_list.add_at_index(2, 40)
print(my_list.to_array())
print(my_list.get_size())
print(my_list.remove_at_index(2))
print(my_list.to_array())
print(my_list.get_size())
print(my_list.remove_first())
print(my_list.to_array())
print(my_list.get_size())
print(my_list.remove_last())
print(my_list.to_array())
print(my_list.get_size())
