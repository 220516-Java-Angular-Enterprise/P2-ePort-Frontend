export interface ViewedAuction {
    id: string;
    title: string;
    buyout_bid: number;
    starting_bid: number;
    startDate?: Date;
    expirationDate?: Date;
    highestBid: number;
    scpName: string;
    scpImage: string;
    scpDescription: string; 
}