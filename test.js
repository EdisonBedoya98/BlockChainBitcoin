const { merkleTree } = require("./merkleTree.js");

const root = new merkleTree (["a","b","c"]);

root.getPairedLeaves();

root.buildTree(root.leafNodes);

console.log(root.rootNode.getData());
