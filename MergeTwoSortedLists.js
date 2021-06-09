/**
 * Merge two sorted linked lists and return it as a sorted list.
 * The list should be made by splicing together the nodes of the first two lists.
 */

const mergeTwoLists = function (l1, l2) {
  let list = new ListNode();
  let head = list;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val);
      l1 = l1.next;
      list = list.next;
    } else {
      list.next = new ListNode(l2.val);
      l2 = l2.next;
      list = list.next;
    }
  }

  while (l1) {
    list.next = new ListNode(l1.val);
    l1 = l1.next;
    list = list.next;
  }

  while (l2) {
    list.next = new ListNode(l2.val);
    l2 = l2.next;
    list = list.next;
  }

  return head.next;
};
