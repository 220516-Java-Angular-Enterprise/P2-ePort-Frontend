import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { AuctionShowing } from '../models/auction-showing';
import { NewAuction } from '../models/new-auction';
import { SCP } from '../models/SCP';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private URL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/";

  getAllUsers(): Promise<User[]>{
    return firstValueFrom(this.http.get<User[]>(this.URL + "users"));
  }

  getUserByUsername(username: string): Promise<User> {
    return firstValueFrom(this.http.get<User>(this.URL + "users/" + username));
  }

  activateUser(activateRequest: User){
    return firstValueFrom(this.http.put(this.URL + "users/activate", activateRequest))
  }

  deleteUser(deleteRequest: string){
    return firstValueFrom(this.http.delete(this.URL + "users/" + deleteRequest, {body: deleteRequest}))
  }

  getAllAuctionShowings(): Promise<AuctionShowing[]>{
    return firstValueFrom(this.http.get<AuctionShowing[]>(this.URL + "active"))
  }

  createNewAuction(newAuction: NewAuction){
    return firstValueFrom(this.http.post(this.URL + "newAuction", newAuction));
  }

  createSCP(scp: SCP){
    return firstValueFrom(this.http.post(this.URL + "scp", scp));
  }
}
