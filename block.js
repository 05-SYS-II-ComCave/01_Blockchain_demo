
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

        // const hash      = "Hash: to do"; // fake it ...
        // const hash      = Block.hash(timestamp,lastHash,blockData); // SHA256
        const hash      = Block.leadingZeroHash(timestamp,lastHash,blockData); // 0000fac34...

        return new this(timestamp, lastHash, hash, blockData); // call constructor
    }

    static hash(timestamp,lastHash,data){
        return SHA256(`${timestamp}${lastHash}${data}`).toString();
    }

    static leadingZeroHash(timestamp,lastHash,blockData){
        
        let toBeHashed = timestamp + lastHash + blockData;

        const leadingZeros = 4;
        const pattern = "^0{"+leadingZeros+"}\w*";
        const regex = new RegExp(pattern);

        const maxNonce = 1000000;
        let tmpNonce = 0;
        let tmpHash;

        let startTime = Date.now();

        do {
            tmpHash = this.hash(toBeHashed + tmpNonce);
            tmpNonce++;
        } while (!regex.test(tmpHash) && tmpNonce < maxNonce);
        
        let endTime = Date.now();
        
        let message =    
        `Anzahl der Durchläufe: ${tmpNonce}
        Hashwert:  ${tmpHash}
        Berechnungen pro ms: ${tmpNonce/(endTime-startTime)}`
        // console.log(message);

        return tmpHash;
    }

}

module.exports = Block; // Export al Modul