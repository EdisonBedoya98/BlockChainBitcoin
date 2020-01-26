const sha256 = require("js-sha256");
const { merkleTree } = require("./merkleTree.js");

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
    hashedtransactions
}