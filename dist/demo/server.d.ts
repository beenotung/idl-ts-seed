import { block, dataContainer, GroupSeq, newDataContainer, UserSeq } from "./shared";
import { expire, multihash, pubKey, transactionId } from "./data";
export declare type StringSeq = Array<string>;
export declare type BlockSeq = Array<block>;
export declare abstract class TransactionHandler {
    abstract createTransaction(NewDataContainer: newDataContainer): void;
    abstract updateTransaction(DataContainer: dataContainer): void;
    abstract getData(TxId: transactionId): dataContainer;
    abstract expireData(Expire: expire): void;
}
export declare abstract class UserHandler {
    abstract searchGroupByName(GroupName: string): GroupSeq;
    abstract searchUserByGroup(GroupId: transactionId, UserName: string): UserSeq;
    abstract getUserPublicKey(UserId: transactionId): pubKey;
    abstract verifySignature(Hash: multihash, UserId: transactionId): boolean;
}
export declare abstract class BlockHandler {
    abstract showBlock(Height: number): block;
    abstract showBlocks(): BlockSeq;
    abstract getHeight(): number;
}
