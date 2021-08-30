/**
 *
 * @param prices int整型一维数组
 * @return int整型
 */
var maxProfit = function (prices) {
  //leetcode 121
  let minPrice = Infinity;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      // 循环中找到历史最小值
      minPrice = prices[i];
      //计算每天卖出分别可以获得利润多少
    } else if (prices[i] - minPrice > maxprofit) {
      maxprofit = prices[i] - minPrice;
    }
  }
  return maxprofit;
};
module.exports = {
  maxProfit: maxProfit,
};
