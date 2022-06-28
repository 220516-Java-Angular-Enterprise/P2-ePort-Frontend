import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, map, Observable } from 'rxjs';
import { Auth } from '../models/auth';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/";

  constructor(private http: HttpClient) { }

  login(auth: User){
    return this.http.post<any>(this.URL + "auth", auth)
  }
  signUp(user: User){
    return firstValueFrom(this.http.post<any>(this.URL + "users", user));
  }

    // signUp(user: User){
  //   return firstValueFrom(this.http.post(this.userURL, user));
  // }

  getAuthToken() {
   return localStorage.getItem("token");
  } 
  isLoggedIn() {
    // !! means double negate, return boolean
    return !!localStorage.getItem("token")
  }
}
