import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/auth";

  constructor(private http: HttpClient) { }

  login(auth: Auth) {
    return this.http.post<any>(this.loginUrl, auth);
  }
}
