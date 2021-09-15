function Fibonacci(n) {
  if (n < 2) return n;
  let a = 0;
  let b = 1;
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return c;
}
module.exports = {
  Fibonacci: Fibonacci,
};
