/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param head1 ListNode类
 * @param head2 ListNode类
 * @return ListNode类
 */
function addInList(head1, head2) {
  let p1 = reverse(head1);
  let p2 = reverse(head2);
  let head = null;
  let curr = null;
  let carry = 0;
  while (p1 || p2) {
    let v1 = p1 ? p1.val : 0;
    let v2 = p2 ? p2.val : 0;
    let sum = v1 + v2 + carry;
    if (!head) {
      head = curr = new ListNode(sum % 10);
    } else {
      curr.next = new ListNode(sum % 10);
      curr = curr.next;
    }
    carry = Math.floor(sum / 10);
    if (p1) p1 = p1.next;
    if (p2) p2 = p2.next;
  }
  if (carry) {
    curr.next = new ListNode(carry);
  }
  return reverse(head);
}

function reverse(head) {
  let curr = head;
  let prev = null;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
module.exports = {
  addInList: addInList,
};
