class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode();
  let cur = dummy;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      cur.next = list2;
      list2 = list2.next;
    } else {
      cur.next = list1;
      list1 = list1.next;
    }
    cur = cur.next;
  }
  cur.next = list1 || list2;
  return dummy.next;
};

const list1 = {
    val: 1,
    next: { val: 2, next: { val: 4, next: null } },
  },
  list2 = {
    val: 1,
    next: { val: 3, next: { val: 4, next: null } },
  };
console.log("Merge two sorted list::", mergeTwoLists(list1, list2));
