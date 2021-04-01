import { Token } from "./token.interface";

export interface Event {
    eventType: string;
    listedPrice: number;
    purchasedPrice: number;
    quantity: number;
    txNFTId: string;
    txAvaxId: string;
    token: Token,
    property: number;
    tokenOwner: number;
    eventCreator: number;
}