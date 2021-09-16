/**
 *
 * @param prices int整型一维数组
 * @return int整型
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  let minPrice = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    } else if (prices[i] - minPrice > maxProfit) {
      maxProfit = prices[i] - minPrice;
    }
  }
  return maxProfit;
};
module.exports = {
  maxProfit: maxProfit,
};
