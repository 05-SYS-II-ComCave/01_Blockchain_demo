// call: npm run dev-test

/* Import */
const Block = require("./block");
const Blockchain = require("./blockchain");

/*  Test der Block-Funktionalität  */

// const block = new Block("aktuelle Zeit", "hash0", "hash1", "myData");
// console.log(block.toString());

// console.log(Block.genesis().toString());

// const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
// console.log(testBlock.toString());

/***  Test der Blockchain-Funktionalität  */

const chain = new Blockchain();
console.log(chain);

chain.addBlock("daten von Block 1");
console.log(chain);

chain.addBlock("daten von Block 2");
chain.addBlock("daten von Block 3");
chain.addBlock("daten von Block 4");

console.log(chain);
