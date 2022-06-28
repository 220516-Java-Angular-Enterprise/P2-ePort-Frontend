import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private loginUrl = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/auth";
  loginUrl="http://localhost:8080/ePort/auth"
  private signupUrl = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/users";

  constructor(private http: HttpClient) { }

  login(auth: User){
    return this.http.post<any>(this.loginUrl, auth)
  }
  signUp(user: User){
    return this.http.post<any>(this.signupUrl, user)
  }
  getAuthToken() {
   return localStorage.getItem("token");
  } 
  isLoggedIn() {
    // !! means double negate, return boolean
    return !!localStorage.getItem("token")
  }
}
