const {Portfolio} = require('./portfolio.js')

let myPortfolio;

beforeAll(()=> {
   myPortfolio = new Portfolio();
})


test('Testing isEmpty() from Portfolio -- success', () => {
   expect(myPortfolio.isEmpty()).toBe(true);
})

test('Testing uniqueTickerCount() from Portfolio -- success', () => {
   expect(myPortfolio.uniqueTickerCount()).toBe(0);
})

test('Testing purchaseShare() from Portfolio -- success', () => {
   myPortfolio.purchaseShare("GME", 5);
   myPortfolio.purchaseShare("RBLX", 10);
   expect(myPortfolio.uniqueTickerCount()).toBe(2);
})

test('Testing sellShare() from Portfolio -- success', () => {
   myPortfolio.sellShare("RBLX", 10);
   expect(myPortfolio.uniqueTickerCount()).toBe(1);
})

test('Testing countShares() from Portfolio -- success', () => {
   expect(myPortfolio.countShares("GME")).toBe(5);
})

test('Testing sellShare() from Portfolio -- fail', () => {
   expect( () => {
      myPortfolio.sellShare("GME", 6);
   }).toThrowError("ShareSellException: Attempting to sell more shares than currently owned.");
})

