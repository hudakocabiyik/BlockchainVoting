const ChainUtil = require('../chain-util');
const { DIFFICULTY,MINE_RATE } = require('../config.js');

class Block{
    constructor(timestamp,lastHash,hash,data,nonce,difficulty){
        this.timestamp = timestamp;
        this.lastHash = lastHash;
        this.hash = hash;
        this.data = data;
        this.nonce = nonce;
        this.difficulty = difficulty || DIFFICULTY;
    }

    getCandidates() {
        return this.data;
    }

    /**
     * returns what the object looks like
     * substring is used to make it look nice
     * hashes are too big to printed on command line 
     */

    toString(){
        return `Block - 
        Timestamp : ${this.timestamp}
        Last Hash : ${this.lastHash.substring(0,10)}
        Hash      : ${this.hash.substring(0,10)}
        Nonce     : ${this.nonce}
        Data      : ${this.data}
        Difficulty: ${this.difficulty}`;
    }

    /**
     * function to create the first block or the genesis block
     */

    static genesis(){

        
        return new this('Genesis time','----','f1574-h4gh',[
            {
                id: 1,
                name: "Hüda",
                ballot: 0
            },
            {
                id: 2,
                name: "Emir",
                ballot: 0
            },
            {
                id: 3,
                name: "Talha",
                ballot: 0
            }
        ],0,DIFFICULTY);
    }

    /**
     * function to create new blocks or to mine new blocks
     */

    static mineBlock(lastBlock, data) {
        let hash;
        let timestamp;
        const lastHash = lastBlock.hash;
        let { difficulty } = lastBlock;
        let nonce = 0;
    
        // lastBlock.data'yı değiştirmeden önce kopyala
        let newBlock = lastBlock.data.map(candidate => ({ ...candidate }));
    
        console.log("Last Block Data (Original):", lastBlock.data);
        console.log("New Block Data (Before Update):", newBlock);
    
        // Belirtilen adaya oy ekle
        newBlock.forEach(candidate => {
            if (candidate.id === data.id) {
                candidate.ballot += 1; 
            }
        });
    
        console.log("New Block Data (After Update):", newBlock);
    
        // Hash üretme işlemi
        do {
            nonce++;
            timestamp = Date.now();
            difficulty = Block.adjustDifficulty(lastBlock, timestamp);
            hash = Block.hash(timestamp, lastHash, newBlock, nonce, difficulty);
        } while (hash.substring(0, difficulty) !== '0'.repeat(difficulty));
    
        // Yeni blok oluştur ve geri döndür
        return new this(timestamp, lastHash, hash, newBlock, nonce, difficulty);
    }
    

    /**
     * function to create the hash value of the block data
     */

    static hash(timestamp,lastHash,data,nonce,difficulty){
        return ChainUtil.hash(`${timestamp}${lastHash}${data}${nonce}${difficulty}`).toString();
    }

    /**
     * return the hash value of the passed block
     */

    static blockHash(block){
        //destructuring
        const { timestamp, lastHash, data, nonce,difficulty } = block;
        return Block.hash(timestamp,lastHash,data,nonce,difficulty);
    }

    /**
     * utility function to adjust difficulty
     */

     static adjustDifficulty(lastBlock,currentTime){
         let { difficulty } = lastBlock;
         difficulty = lastBlock.timestamp + MINE_RATE > currentTime ? difficulty + 1 : difficulty - 1; 
         return difficulty; 
     }

}

// share this class by exporting it

module.exports = Block;