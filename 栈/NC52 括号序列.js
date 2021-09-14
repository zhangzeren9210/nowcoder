/**
 *
 * @param s string字符串
 * @return bool布尔型
 */
function isValid(s) {
  const n = s.length;
  if (n % 2 === 1) {
    return false;
  }
  const map = {
    "}": "{",
    "]": "[",
    ")": "(",
  };
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] in map && map[s[i]] === stack[stack.length - 1]) {
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }
  return stack.length === 0;
}
module.exports = {
  isValid: isValid,
};
