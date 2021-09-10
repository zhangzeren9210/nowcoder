/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
/**
 * lru design
 * @param operators int整型二维数组 the ops
 * @param k int整型 the k
 * @return int整型一维数组
 */
function ListNode(key, val) {
  this.val = val;
  this.key = key;
  this.prev = null;
  this.next = null;
}
function LRU(operators, k) {
  let size = 0;
  let head = new ListNode(-1, -1);
  let tail = new ListNode(-1, -1);
  head.next = tail;
  tail.prev = head;
  let map = {};
  let result = [];
  for (let i = 0; i < operators.length; i++) {
    const [operator, key, value] = operators[i];
    if (operator === 1) {
      set(key, value);
    }
    if (operator === 2) {
      get(key);
    }
  }
  function set(key, value) {
    let node = map[key];
    if (!node) {
      let newnode = new ListNode(key, value);
      map[key] = newnode;
      addToHead(newnode);
      size++;
      if (size > k) {
        let node = tail.prev;
        removeNode(node);
        delete map[node.key];
        size--;
      }
    } else {
      node.val = value;
      moveToHead(node);
    }
  }
  function get(key) {
    let node = map[key];
    let tmp;
    if (!node) {
      tmp = -1;
    } else {
      moveToHead(node);
      tmp = node.val;
    }
    result.push(tmp);
    return tmp;
  }
  function moveToHead(node) {
    removeNode(node);
    addToHead(node);
  }
  function removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }
  function addToHead(node) {
    node.prev = head;
    node.next = head.next;
    head.next.prev = node;
    head.next = node;
  }
  return result;
}
module.exports = {
  LRU: LRU,
};
