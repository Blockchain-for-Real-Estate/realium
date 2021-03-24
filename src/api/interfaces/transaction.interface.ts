import { Asset } from "./asset.interface";

export interface Transaction {
    //transactionId: string;
    txId: string;
    txTypeId: number;
    asset: Asset;
    price: number;
    sender: string;
    receiver: string;
    txNFTId: string;
    txAvaxId: string;
    txDateTime: Date
}