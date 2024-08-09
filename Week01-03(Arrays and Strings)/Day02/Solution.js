const maxProfit =(prices)=>{
    const n = prices.length
    let profit = 0;
    let min = prices[0]
    let buy =0
    let sell = 0
    
    // Better approach T.C - O(n)
    for (let i=1; i<n; i++) {
        const val = prices[i]
        if (val < min) {
            min = val
            buy = val
        }
        const todayProfit = val - min
        if (todayProfit > profit) {
            profit = todayProfit
            sell =val
        }
    }
    // for (let i=1; i<n; i++) {
    //     const val = prices[i]
    //     const todayProfit = val - min
    //     min = Math.min(val, min)
    //     profit = Math.max(profit, todayProfit)
    // }
    return {profit, buy, sell}
    
    // Brute force T.C - O(n2)
    // for (let i=0; i<n; i++) {
    //     for (let j=i+1; j<n; j++) {
    //         const todayVal = prices[j]- prices[i]
    //         if(todayVal > profit) {
    //             profit = todayVal
    //         }
    //     }
    // }
    // return profit
    
};

const prices = [7,1,5,3,6,4]
console.log("max_profit::", maxProfit(prices))