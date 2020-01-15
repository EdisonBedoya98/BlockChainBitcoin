const sha256 = require("js-sha256");

function hasZeros(hash, n){
    var zeroCount = 0;
    var auxn = Math.ceil(n/8);
    
    for (var i = 0; i < auxn; i++) {
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
    var nonce = 0;
    var newHash = hash;  

    while ( !hasZeros(newHash, n) ) {
        nonce++;
        newHash = sha256.array(hash + nonce);
    }

    return {
        "nonce" : nonce,
        "hashNonce" : newHash
    };
}

module.exports = {
    hasZeros,
    proofOfWork
}