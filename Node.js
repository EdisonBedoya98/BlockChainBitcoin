class Node {
    constructor(data) {
        this.data = data;
        this.root = null;
        this.sibling = null;
    }

    setData(data) {
        this.data = data;
    }
    setRoot(root) {
        this.root = root;
    }
    setSibling(sibling) {
        this.sibling = sibling;
    }
    getData() {
        return this.data;
    }
    getSibling() {
        return this.sibling;
    }
    getroot() {
        return this.root;
    }
}

module.exports = {
    Node
}