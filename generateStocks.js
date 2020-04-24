const fakestockmarketgenerator = require("fake-stock-market-generator")
const fs = require("fs")

const stocks = [...Array(20).keys()].map(i => {
  return fakestockmarketgenerator.generateStockData(10)
})

fs.writeFileSync('stocks.json', JSON.stringify(stocks, null, 4))
