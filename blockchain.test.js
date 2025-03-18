const Block = require("./block");
const Blockchain = require("./blockchain");

describe("Blockchain", () => {

    let bc;

    beforeEach(() => {
        bc = new Blockchain();
    });


    // 1. Test Genesis-Block
    it("starts with Genesis-Block", () => {
        expect(bc.chain[0]).toEqual(Block.genesis());
    });

    // 2. Test addBlock()
    it("adds new block", () => {
        const data = "TestDaten";
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length-1].data).toEqual(data);
    });

});