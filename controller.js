const sha256 = require("js-sha256");
const { merkleTree } = require("./merkleTree.js");

const { Block } = require("./Block.js");

function hasZeros(hash, n) {
    let zeroCount = 0;
    let auxn = Math.ceil(n / 8);

    for (let i = 0; i < auxn; i++) {
        const element = hash[i];

        if (element > 0) {
            zeroCount += (7 - parseInt(Math.log2(element)));
            break;
        }

        zeroCount += 8;
    }

    return (zeroCount >= n);
}

function proofOfWork(hash, n) {
    let nonce = 0;
    let newHash = hash;

    while (!hasZeros(newHash, n)) {
        nonce++;
        newHash = sha256.array(hash + nonce);
    }

    return {
        "nonce": nonce,
        "hashNonce": newHash
    };
}
function createBlock(transactions, blockChain) {


    let hashedtransactions = this.hashedtransactions(transactions);
    const tree = new merkleTree(hashedtransactions);

    tree.getPairedLeaves();
    tree.buildTree(tree.leafNodes);

    let rootHashedData = tree.getRoot().getData();

    let ans = this.proofOfWork(rootHashedData, 5);//Se hace la prueba de trabajo con 5 ceros

    let nonce = ans.nonce;


    let block = new Block();
    if (blockChain.lenght == 0) {
        block.setHashPrev(0);
        block.setHashedTransactions(rootHashedData);
        block.setNonce(nonce);

    } else {
        let prevBlock = blockChain[blockChain.lenght - 1];
        let hashPrev = sha256.array(prevBlock.getHashPrev() + prevBlock.getNonce() + prevBlock.getHashedTransactions());

        block.setHashPrev(hashPrev);

        block.setNonce(nonce);
        block.setHashedTransactions(rootHashedData);
    }

    return block;







}
function createMerkleTree(transactions) {
    const tree = new merkleTree(transactions);

    tree.getPairedLeaves();
    tree.buildTree(tree.leafNodes);

    return tree;
}
function hashedtransactions(transactions) {
    let hashedtransactions = [];
    transactions.forEach(transaction => {
        hashedtransactions.push(sha256(transaction));
    });

    return hashedtransactions;
}
module.exports = {
    hasZeros,
    proofOfWork,
    createMerkleTree,
    hashedtransactions,
    createBlock
}