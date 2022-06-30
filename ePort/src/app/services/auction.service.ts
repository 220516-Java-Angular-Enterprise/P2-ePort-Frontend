import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuctionShowing } from '../models/auction-showing';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {

  constructor(private http: HttpClient) { }

  private URL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/";

  getAllAuctions(): Promise<AuctionShowing[]> {
    return firstValueFrom(this.http.get<AuctionShowing[]>(this.URL + "auction/active"));
  }
<<<<<<< HEAD
=======

  getAuctionDetails(title: string): Promise<any> {
    return firstValueFrom(this.http.get<any>(this.URL));
  }
  
>>>>>>> 64b2b98fecfba4e9faae5e05b4a2f068befe86ca
}
