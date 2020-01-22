const { Node } = require("./Node.js");
const sha256 = require("js-sha256");

const root = new Node ("Hash");

class merkleTree {

    constructor(leaves) {
        this.rootNode = null;
        this.leaves = leaves;
        this.leafNodes = [];
    }

    get getRoot(){
        return this.rootNode;
    }

    buildTree(nodes){
        if (nodes.length == 1) {
            this.rootNode = nodes[0];
            return;
        }

        let parenths = [];

        for (let i = 0; i < nodes.length; i = i + 2) {
            const element = nodes[i];

            if (i == nodes.length - 1) { //If element is the last node
                parenths.push(element);
                break;
            }

            const nextElement = nodes[i+1];
            let leftNode = element;
            let rightNode = nextElement;
            
            console.log("data:" + leftNode.data + rightNode.data);
            
            console.log(sha256(leftNode.data + rightNode.data));
            
            let newRoot = new Node (sha256(leftNode.data + rightNode.data));
            leftNode.root = newRoot;
            rightNode.root = newRoot;

            parenths.push(newRoot);
        }        

        return this.buildTree(parenths);
    }

    getPairedLeaves(){
        
        for (let i = 0; i < this.leaves.length; i = i + 2) {
            const element = this.leaves[i];

            if (i == this.leaves.length - 1) {
                let newNode = new Node (element);
                this.leafNodes.push(newNode);
                break;
            }

            const nextElement = this.leaves[i+1];
            let leftNode = new Node (element);
            let rightNode = new Node (nextElement);

            leftNode.sibling = rightNode;
            rightNode.sibling = leftNode;
            this.leafNodes.push(leftNode);
            this.leafNodes.push(rightNode);
        }
    }

}

module.exports = {
    merkleTree
}