const Node = require("./Node.js/index.js");

const root = new Node ("Hash");

class merkleTree {

    constructor(leaves) {
        this.rootNode = null;
        this.leaves = leaves;
        
    }

    get getRoot(){
        return this.rootNode;
    }

    buildTree(){
        
    }



}