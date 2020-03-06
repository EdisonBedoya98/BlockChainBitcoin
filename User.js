class User {

    constructor(isMiner) {
        this.address = null;
        this.balance = 0;
        this.isMiner = isMiner;
    }
  
    setAddress(address) {
        this.address = address;
    }
    setBalance(balance) {
        this.balance = balance;
    }
    getAddress() {
        return this.address;
    }
  
    getBalance() {
        return this.balance;
    }
}
