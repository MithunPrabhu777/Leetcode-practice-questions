var removeNthFromEnd = function(head, n) {   
    let dummyNode = new ListNode(0,head);
    
    let fast = dummyNode;
    
    let slow = dummyNode;
    
    while(n-- > -1){
        fast = fast.next;
    }
    
    while(fast){
        slow = slow.next;
        fast = fast.next;
    }
    
    slow.next = slow.next.next;
    
    return dummyNode.next;
};
