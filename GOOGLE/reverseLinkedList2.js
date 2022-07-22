/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummyNode = new ListNode(0, head);

    let pre = dummyNode;

    for (let i = 1; i < left; i++) {
        pre = pre.next;
    }

    let current = pre.next;

    for (let i = 0; i < right - left; i++) {
        let temp = current.next;
        current.next = temp.next;
        temp.next = pre.next;
        pre.next = temp;
    }

    return dummyNode.next;
};

Input: head = [1, 2, 3, 4, 5], left = 2, right = 4
Output: [1, 4, 3, 2, 5]
