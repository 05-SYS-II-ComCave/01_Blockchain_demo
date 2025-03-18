// call: npm run dev-test

/* Import */
const Block = require("./block");

/*  Test der Block-Funktionalität  */

// const block = new Block("aktuelle Zeit", "hash0", "hash1", "myData");
// console.log(block.toString());

console.log(Block.genesis().toString());

const testBlock = Block.mineBlock(Block.genesis(),"testDaten")
console.log(testBlock.toString());