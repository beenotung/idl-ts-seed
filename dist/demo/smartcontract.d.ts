import { dataContainer, GroupSeq, newDataContainer, UserSeq } from "./shared";
import { byteSeq, id, pubKey, transactionId } from "./data";
export interface data {
    Type: string;
    Data: any;
}
export interface list_item {
    Data: any;
    Next: id;
}
export declare abstract class GeneralContract {
    abstract create(NewDataContainer: newDataContainer): void;
    abstract update(DataContainer: dataContainer): void;
    abstract read(TxId: transactionId): dataContainer;
}
export declare abstract class UserContract extends GeneralContract {
    abstract searchGroupByName(GroupName: string): GroupSeq;
    abstract searchUserByGroup(GroupId: transactionId, UserName: string): UserSeq;
    abstract getUserPublicKey(UserId: transactionId): pubKey;
    abstract verifySignature(Hash: byteSeq, UserId: transactionId): boolean;
}
