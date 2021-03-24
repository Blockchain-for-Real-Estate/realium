export interface Asset {
    //assetId: number;
    assetName: string;
    assetTypeId: number;
    listingType: string;
    propertyType: string;
    legalTypeId: number;
    tokenId: string;
    tokenName: string;
    parcelId: string;
    streetAddress: string;
    city: string;
    state: string;
    zipCode: string;
    originalPrice: number;
    listedPrice: number;
    funded: number;
    forcastedIncome: number;
    minInvestment: number;
    maxInvestment: number;
    share: number;
    yearBuilt: number;
    country: string;
    acerage: number;
    llc: string;
    details: JSON;
    listed: boolean;
}
