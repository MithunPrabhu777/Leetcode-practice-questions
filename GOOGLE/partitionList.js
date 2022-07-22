var partition = function (head, x) {
    let current = head;
    let low = new ListNode(), high = new ListNode(), lowReference = low, highReference = high;

    while (current != null) {
        if (current.val < x) {
            low.next = current;
            low = low.next;
        } else {
            high.next = current;
            high = high.next;
        }

        current = current.next;
    }

    low.next = highReference.next;
    high.next = null;

    return lowReference.next;

};

Input: head = [1, 4, 3, 2, 5, 2], x = 3
Output: [1, 2, 2, 4, 3, 5]