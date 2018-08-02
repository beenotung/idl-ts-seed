import { group, keyPair, transactionId, user } from "./data";
export declare abstract class WelcomePage {
    abstract login(UserKeyPair: keyPair): void;
    abstract createUser(User: user): void;
    abstract createGroup(Group: group): void;
    abstract joinGroup(GroupId: transactionId, User: user): void;
    abstract quitGroup(GroupId: transactionId, User: user): void;
}
