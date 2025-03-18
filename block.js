
const SHA256 = require("crypto-js/sha256");

// Klasse

class Block{

    constructor(timestamp,lastHash,hash,data){
        this.timestamp = timestamp; // Zeitstempel
        this.lastHash = lastHash; // Hash des vorhergehenden Blocks
        this.hash = hash; // Eigener Hash
        this.data = data; // Daten
    }

    toString(){ // für Debugging-Zwecke
        return `Block -
        Timestamp:  ${this.timestamp}
        Last Hash:  ${this.lastHash}
        Hash:       ${this.hash}
        Data:       ${this.data}`
    }

    static genesis(){ // 1. Block der chain
        return new this("GenesisTime","000000","#abcdC1234","GenesisData"); // call constructor
    }

    static mineBlock(lastBlock, blockData){ // weitere Blocks in der Chain
        
        const timestamp = Date.now(); // Zeit im ms seit 01.01.1970 | UNIX
        const lastHash  = lastBlock.hash; // HASH-Wert des Vorgängers
        // const hash      = "Hash: to do"; // SHA256
        const hash      = Block.hash(timestamp,lastHash,blockData); // SHA256

        return new this(timestamp, lastHash, hash, blockData); // call constructor
    }

    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

}

module.exports = Block; // Export al Modul