import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuctionShowing } from '../models/auction-showing';
import { Bid } from '../models/bid';
import { ViewedAuction } from '../models/viewed-auction';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  private URL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/";

  getAllAuctions(): Promise<AuctionShowing[]> {
    return firstValueFrom(this.http.get<AuctionShowing[]>(this.URL + "auction/active"));
  }

  getAuctionDetails(title: string): Promise<ViewedAuction> {
    return firstValueFrom(this.http.get<ViewedAuction>(this.URL + "auction/detailed/" + title));
  }

  newBid(bid: Bid) {
    return firstValueFrom(this.http.post<Bid>(this.URL + "bid/newBid", bid));
  }
  
}
