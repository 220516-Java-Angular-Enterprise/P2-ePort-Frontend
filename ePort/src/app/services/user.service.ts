import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, FirstValueFromConfig } from 'rxjs/internal/firstValueFrom';
import { AuctionShowing } from '../models/auction-showing';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private URL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/";

  updateUserInfo(user: User){
    return firstValueFrom(this.http.put(this.URL +"users", user));
  }

  getUserByUsername(username: string): Promise<User> {
    return firstValueFrom(this.http.get<User>(this.URL + "users/" + username));
  }
}
