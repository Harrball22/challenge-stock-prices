function best(stockPrices){
    let lastPurchasePrice = undefined
    let totalProfit = 0
    let highestProfitFromOneSell = 0
    for(i = 0; i < stockPrices.length; i++){
        if (lastPurchasePrice === undefined && stockPrices[i] < stockPrices[i + 1]){ // Should I buy
            lastPurchasePrice = stockPrices[i]
            console.log("buy at", stockPrices[i])
        } else if (lastPurchasePrice !== undefined && (stockPrices[i] > stockPrices[i + 1] || i === stockPrices.length - 1)){ // Should I sell
            let profitThisSell = stockPrices[i] - lastPurchasePrice
            totalProfit += profitThisSell
            lastPurchasePrice = undefined
            console.log("sell at", stockPrices[i])

            if (profitThisSell > highestProfitFromOneSell){
                highestProfitFromOneSell = profitThisSell
            }
        }
        console.log(i)
    }
    return `total profit: ${totalProfit}, highest profit: ${highestProfitFromOneSell}`
}

console.log(best([15, 10, 20, 22, 1, 9]))
console.log(best([1, 2, 3, 4, 5]))
console.log(best([2, 3, 10, 6, 4, 8, 1]))
console.log(best([7, 9, 5, 6, 3, 2]))
console.log(best([0, 100]))
console.log(best([best([5, 4 , 3, 2, 1])]))