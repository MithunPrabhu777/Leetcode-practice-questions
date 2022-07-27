var sortList = function (head) {
    if (!head || !head.next) return head;

    const [left, right] = split(head);

    let root = new ListNode(null);

    return merge(root, sortList(left), sortList(right));

};

function split(node) {
    let slow = node, fast = node;

    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let left = node, right = slow.next;

    slow.next = null;

    return [left, right];
}


function merge(root, left, right) {
    let pointer = root;

    while (left !== null || right !== null) {
        if (left === null) {
            pointer.next = right;
            right = right.next;
        } else if (right === null) {
            pointer.next = left;
            left = left.next;
        } else {
            if (left.val < right.val) {
                pointer.next = left;
                left = left.next;
            } else {
                pointer.next = right;
                right = right.next;
            }
        }

        pointer = pointer.next;
    }

    return root.next;
}

Input: head = [4, 2, 1, 3]
Output: [1, 2, 3, 4]