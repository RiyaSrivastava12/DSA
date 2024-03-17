function maxProfit(prices){
let buy = prices[0];
let profit = 0;
for(let i = 0; i<prices.length; i++){
    if(buy>prices[i] ){
        buy = prices[i];
    }
    else if(prices[i] - buy > profit){
        profit = prices[i] - buy;
    }
}
return profit;
}

let prices = [7,1,5,3,6,4];
console.log(maxProfit(prices));

/**
 * This is a JavaScript function named maxProfit inside a class named Solution. The function takes an array of numbers named prices as an argument. The prices array represents the price of a stock on different days.

The function is designed to find the maximum profit you can make by buying and selling the stock. Here’s how it works:

It initializes buy to the price of the stock on the first day and profit to 0.
It then iterates over the prices from the second day onwards.
If the price of the stock on the current day is less than the minimum price found so far (buy), it updates buy to the current price.
If the difference between the current price and buy is greater than the current profit, it updates profit to this difference.
Finally, it returns the maximum profit.
In other words, this function is trying to find the lowest price to buy the stock and the highest price to sell it to maximize the profit. 
 */