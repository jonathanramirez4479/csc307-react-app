class Portfolio {
    constructor() {
        this.shares = {}
    };

    isEmpty() {
        return Object.keys(this.shares).length === 0;
    }

    uniqueTickerCount() {
        return Object.keys(this.shares).length;
    }

    purchaseShare(stock, share_count) {
        this.shares[stock] = share_count;
    }

    sellShare(stock, share_count) {
        if(share_count > this.shares[stock])
            throw new Error("ShareSellException: Attempting to sell more shares than currently owned.");

        this.shares[stock] -= share_count;
        if(this.shares[stock] === 0)
            delete this.shares[stock];
    }

    countShares(stock) {
        return this.shares[stock];
    }
}

exports.Portfolio = Portfolio;