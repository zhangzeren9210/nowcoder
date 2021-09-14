/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param n int整型
 * @return ListNode类
 */
function removeNthFromEnd(head, n) {
  // leetcode 19
  let pHead = new ListNode(-1);
  pHead.next = head;
  let left = pHead;
  let right = pHead;
  for (let i = 0; i <= n; i++) {
    right = right.next;
  }
  while (right) {
    left = left.next;
    right = right.next;
  }
  left.next = left.next.next;
  return pHead.next;
}
module.exports = {
  removeNthFromEnd: removeNthFromEnd,
};
