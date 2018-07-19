import { byteSeq, id, pubKey, transactionId } from './data';
import { dataContainer, GroupSeq, newDataContainer, UserSeq } from './shared';

export interface data {
  Type: string;
  Data: any;
}

export interface list_item {
  Data: any;
  Next: id;
}

export abstract class GeneralContract {
  abstract create(NewDataContainer: newDataContainer): void;

  abstract update(DataContainer: dataContainer): void;

  abstract read(TxId: transactionId): dataContainer;
}

// for group and user
export abstract class UserContract extends GeneralContract {
  abstract searchGroupByName(GroupName: string): GroupSeq;

  // raises NotFound when the Group doesn't exist
  abstract searchUserByGroup(GroupId: transactionId, UserName: string): UserSeq;

  abstract getUserPublicKey(UserId: transactionId): pubKey;

  // return true if valid, false if not.
  abstract verifySignature(Hash: byteSeq, UserId: transactionId): boolean;
}
