/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/**
 *
 * @param lists ListNode类一维数组
 * @return ListNode类
 */
var mergeKLists = function (lists) {
  function mergeTwoLists(l1, l2) {
    if (!l1) {
      return l2;
    }
    if (!l2) {
      return l1;
    }
    if (l1.val > l2.val) {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    } else {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
    }
  }
  function merge(left, right) {
    if (left === right) return lists[left];
    let mid = (left + right) >> 1;
    let list1 = merge(left, mid);
    let list2 = merge(mid + 1, right);
    return mergeTwoLists(list1, list2);
  }
  return merge(0, lists.length);
};
module.exports = {
  mergeKLists: mergeKLists,
};
