import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/auth";
  private signupUrl = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/users";

  constructor(private http: HttpClient) { }

  login(auth: User): Observable<any> {

    return this.http.post<any>(this.loginUrl, auth,
      {
      // observe:'response', // want to observe the whole response
      responseType: 'json'
    })
  }
  signUp(user: User){
    return this.http.post<any>(this.signupUrl, user);
  }

  getAuthToken() {
    const token = "eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI0ZDhkZjQ1ZS0xZGI4LTQ2MGUtOTlhZS1iYzMyODMxZDI2NDgiLCJpc3MiOiJ5b2xwIiwiaWF0IjoxNjU2MzA3NDQ3LCJleHAiOjE2NTYzMTEwNDcsInN1YiI6Im1hcmtzdGVzdDEiLCJyb2xlIjoiREVGQVVMVCJ9.heYCkU0rnCQ0cHOWcsAflqSyD3_HmX1e387DB_v-IIE"
    return token // returning null
  } 
}
