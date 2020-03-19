class Block {

    constructor() {
        this.hashPrev = null;
        this.nonce = null;
        this.hashedTransactions = null;
    }

    setNonce(nonce) {
        this.nonce = nonce;
    }
    setHashedTransactions(hashedTransactions) {
        this.hashedTransactions = hashedTransactions;
    }
    setHashPrev(hashPrev) {
        this.hashPrev = hashPrev;
    }
    getNonce() {
        return this.nonce;
    }

    getHashedTransactions() {
        return this.hashedTransactions;
    }
    getHashPrev() {
        return this.hashedTransactions;
    }
}


module.exports = {
    Block
}