export interface Transaction {
    //transactionId: string;
    transactionTypeId: number;
    assetId: string;
    transactionHash: string;
    hashVersion: number;
    //blockId: string;
    transactionDateTime: Date
}