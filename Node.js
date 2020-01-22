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
    get getData() {
        return this.data;
    }
    get getSibling() {
        return this.sibling;
    }
    get getroot() {
        return this.root;
    }
}

module.exports = {
    Node
}