/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function FindFirstCommonNode(pHead1, pHead2) {
  // leetcode 160
  let p1 = pHead1;
  let p2 = pHead2;
  while (p1 != p2) {
    p1 = p1 ? p1.next : pHead2;
    p2 = p2 ? p2.next : pHead1;
  }
  return p1;
}
module.exports = {
  FindFirstCommonNode: FindFirstCommonNode,
};
