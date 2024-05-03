class BuySellStock{
    public int profitSell(int[] prices){
        int buy = prices[0];
        int profit = 0;

        for(int i = 0; i<prices.length; i++){
            if(buy > prices[i]){
                buy = prices[i];
            }
            else if(prices[i] - buy > profit){
                profit = prices[i] - buy;
            }
        }
        return profit;
    }


    public static void main(String[] args) {
        BuySellStock bs = new BuySellStock();
        int prices[] = {7,1,5,3,6,4};
        System.out.println(bs.profitSell(prices));
    }}


    /**
     * Example 1:
Input:
 prices = [7,1,5,3,6,4]
Output:
 5
Explanation:
 Buy on day 2 (price = 1) and 
sell on day 5 (price = 6), profit = 6-1 = 5.

Note
: That buying on day 2 and selling on day 1 
is not allowed because you must buy before 
you sell.

Example 2:
Input:
 prices = [7,6,4,3,1]
Output:
 0
Explanation:
 In this case, no transactions are 
done and the max profit = 0.
     */
