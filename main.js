//first BC
const SHA256 = require('crypto-js/sha256');
class Block {
    constructor(index, data, previousHash = ''){                       //prop Block
        this.index = index;
        this.date = new Date();
        this.data = data;
        this.previousHash  = previousHash;
        this.hash = this.createHash();
    }

    createHash() {
        return SHA256(this.index + this.date + this.data ).toString();   //hash
    }
}

class BlockChain{
    constructor(genesis){                                               //1º Block
        this.chain = [this.createFirstBlock(genesis)];
    }
    createFirstBlock(genesis){
        return new Block(0,genesis);
    }
    getLastBlock(){
        return this.chain[this.chain.legth-1];
    }
    addBlock(data){
        let precBlock = this.getLastBlock();
        let block = new Block(prevBlock.index+1, data, prevBlock.hash);
        this.chian.push(block);
    }
}

//bloc = new Block(0, 'prueba');
//console.log(JSON.stringify(block, null,2));

let SayCoin = new BlockChain('info de genesis');
SayCoin.addBlock('2ªSayCoin');                                      //second chain
SayCoin.addBlock('3ªSayCoin');                                      //3º chain
console.log(JSON.stringify(block, null,2));
