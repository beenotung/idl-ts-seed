import { group, multihash, time, transactionId, user } from "./data";
export declare type GroupSeq = Array<group>;
export declare type UserSeq = Array<user>;
export interface block {
    Height: number;
    Time: time;
    NumOfTx: number;
    Miner: string;
    PrevHash: multihash;
    BlockHash: multihash;
}
export interface dataContainer {
    Type: number;
    TxId: transactionId;
    Data: any;
}
export interface newDataContainer {
    Type: number;
    Data: any;
}
export declare class NotFound extends Error {
}
export declare class Duplicated extends Error {
}
export declare class NetworkError extends Error {
}
export declare class OutOfSpace extends Error {
}
export declare enum AuthErrorType {
    ORG_AUTH_ERROR = 0,
    DEPARTMENT_AUTH_ERROR = 1,
    USER_AUTH_ERROR = 2
}
export declare enum AuthErrorReason {
    NOT_FOUND = 0,
    INVALID = 1
}
export declare class AuthError extends Error {
    Type: AuthErrorType;
    Reason: AuthErrorReason;
}
