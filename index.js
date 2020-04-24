const WebServer = require("ws").Server
const fs = require("fs")

let stocks

try {
  stocks = JSON.parse(fs.readFileSync("stocks.json"))
  console.log("Successfully load stocks data")
} catch {
  throw Error("Load data error")
}

const stockSymbols = stocks.map(stock => stock.symbol)
console.log(`Supported stock symbols: ${stockSymbols}`)

const wsServer = new WebServer({port: 8088})
console.log("wsServer is listening on port 8088")

let getConnectedEvent = () => {
  let event = {
    event: "connected",
    supportedSymbols: stockSymbols,
    message: "All stocks data is not real"
  }

  return JSON.stringify(event)
}

wsServer.on('connection', (ws) => {
  ws.send(getConnectedEvent())
})
