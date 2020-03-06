class Transaction {

    constructor() {
        this.from = null;
        this.quantity = 0;
        this.to = null;
    }
  
    setFrom(from) {
        this.from = from;
    }
    setQuantity(quantity) {
        this.quantity = quantity;
    }
    setTo(to) {
        this.to = to;
    }
    getFrom() {
        return this.from;
    }
  
    getQuantity() {
        return this.quantity;
    }
    getHashTo() {
        return this.to;
    }
}
