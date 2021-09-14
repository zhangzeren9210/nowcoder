/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function EntryNodeOfLoop(pHead) {
  //leetcode 142
  let fast = pHead;
  let slow = pHead;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) break;
  }
  // 判断上述终止条件是不是 fast为null 或者 fast.next为null
  // 如果是 则没有环
  if (!fast || !fast.next) {
    return null;
  }
  fast = pHead;
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
}
module.exports = {
  EntryNodeOfLoop: EntryNodeOfLoop,
};
