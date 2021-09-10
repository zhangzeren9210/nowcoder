function ReverseList(pHead) {
  let prev = null,
    curr = pHead;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}
