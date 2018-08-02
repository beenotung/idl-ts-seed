export declare type transactionId = string;
export declare type id = string;
export declare type time = number;
export declare type byteSeq = Array<number>;
export declare type multihash = string;
export declare type multibase = string;
export declare type multiaddr = string;
export declare type multicodec = Array<number>;
export interface multilang {
    En: string;
    Zh: string;
    Cn: string;
}
export interface pubKey {
    Method: string;
    PubKey: Array<number>;
}
export interface user_pubKey {
    Id: id;
    UserId: id;
    PubKey: pubKey;
}
export interface signature {
    SignerUserPubKeyId: id;
    Method: string;
    Signature: Array<number>;
}
export interface keyPair {
    Method: string;
    Content: multibase;
}
export interface expire {
    Id: id;
    TargetId: id;
    ExpireTime: time;
    Reason: string;
    Signature: signature;
}
export interface user {
    Id: id;
    UserName: string;
    UserPubKeySeq: Array<pubKey>;
    Signature: signature;
}
export interface group {
    Id: id;
    GroupName: string;
    GroupPubKey: pubKey;
    CreatorId: id;
    Signature: signature;
}
export interface user_group {
    Id: id;
    GroupId: id;
    UserId: id;
    Action: number;
    Signature: signature;
}
export interface endorse_user_group {
    Id: id;
    UserGroupId: id;
    Endorser: id;
    Signature: signature;
}
