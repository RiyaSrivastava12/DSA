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