import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, identity } from 'rxjs';
import { firstValueFrom, FirstValueFromConfig } from 'rxjs/internal/firstValueFrom';
import { AuctionShowing } from '../models/auction-showing';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  private URL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort";

  updateUserInfo(user: User){
    return firstValueFrom(this.http.put(this.URL, user));
  }

  getUserByUsername(name: string) {
    return localStorage.getItem('username');
  }

  getUserById(id: string){
    return localStorage.getItem('id');
  }

  getUserByRole(name: string) {
    return localStorage.getItem('role');
  }
}
