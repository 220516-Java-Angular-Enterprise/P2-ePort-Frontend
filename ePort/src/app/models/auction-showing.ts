export interface AuctionShowing {
    id?: string;
    title?: string;
    auctionStatus?: boolean;
    startingDate?: Date;
    expirationDate?: Date;
    startingBid?: number;
    buyoutBid?: number
}