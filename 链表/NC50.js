/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head ListNode类
 * @param k int整型
 * @return ListNode类
 */
function reverseKGroup(head, k) {
  let curr = head;
  // write code here
  for (let i = 0; i < k; i++) {
    if (!curr) return head;
    curr = curr.next;
  }
  let result = reverse(head, curr);
  head.next = reverseKGroup(curr, k);
  return result;
}
function reverse(head, tail) {
  let curr = head;
  let prev = tail;
  while (curr != tail) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
module.exports = {
  reverseKGroup: reverseKGroup,
};
