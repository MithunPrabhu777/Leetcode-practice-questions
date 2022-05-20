// brute force approach

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.root = null;
    this.itemsArray = [];
  }

  insertNode(value) {
    let current;
    let newNode = new Node(value);
    this.itemsArray.push(newNode.value);
    if (!this.root) {
      this.root = newNode;
    } else {
      current = this.root;
      while (current.next) {
        current = current.next;
      }

      // add node
      current.next = newNode;
    }
  }

  findMiddleNode(headNode) {
    // This extra space for array
    /*
    let middleIndex = Math.floor(this.itemsArray.length / 2);
    let counter = 0;

    let current = headNode;

    while (current) {
      current = current.next;
      counter += 1;

      if (counter == middleIndex) {
        console.log(current);
        return current;
      }
    }  
    */

    // Better solution

    // Time Complexity: O(n)
    // Space Complexity: O(1)

    let slow = headNode;
    let fast = headNode;

    while (slow.next && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    console.log(slow);
    return slow;
  }

  isPalindrome(headNode) {
    let reversedString = "";
    let normalString = "";
    let current = headNode;

    while (current) {
      reversedString = current.value + reversedString;
      normalString = normalString + current.value;
      current = current.next;
    }

    console.log(reversedString == normalString);
    return reversedString == normalString;
  }

  /*
  The naive approach here would be to run through the linked list and create an array of its values, then compare the array to its reverse to find out if it's a palindrome. Though this is easy enough to accomplish, we're challenged to find an approach with a space complexity of only O(1) while maintaining a time complexity of O(N).

The only way to check for a palindrome in O(1) space would require us to be able to access both nodes for comparison at the same time, rather than storing values for later comparison. This would seem to be a challenge, as the linked list only promotes travel in one direction.

But what if it didn't?

The answer is to reverse the back half of the linked list to have the next attribute point to the previous node instead of the next node. (Note: we could instead add a prev attribute as we iterate through the linked list, rather than overwriting next on the back half, but that would technically use O(N) extra space, just as if we'd created an external array of node values.)

The first challenge then becomes finding the middle of the linked list in order to start our reversing process there. For that, we can look to Floyd's Cycle Detection Algorithm.

With Floyd's, we'll travel through the linked list with two pointers, one of which is moving twice as fast as the other. When the fast pointer reaches the end of the list, the slow pointer must then be in the middle.
*/
}

let linkedList = new LinkedList();
linkedList.insertNode(1);
linkedList.insertNode(2);
linkedList.insertNode(3);
linkedList.insertNode(4);
linkedList.insertNode(5);
let headNode = linkedList.root;
// linkedList.findMiddleNode(headNode);
linkedList.isPalindrome(headNode);
