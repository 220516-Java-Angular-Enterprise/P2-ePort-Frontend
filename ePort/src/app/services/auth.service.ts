import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginUrl = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/auth";
  private signupUrl = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/users";

  constructor(private http: HttpClient) { }

  /**
   * 
 loginTest(loginCred: LoginParams): Observable<any> {
    const header1= {'Content-Type':'application/json',};
    const body =  JSON.stringify(loginCred);
    return this.http.post<any>(this.baseURL+'signin',body,{
        headers: header1,
        observe: 'response',
        responseType: 'json'
    });
}
   */
  login(auth: User): Observable<any> {
    const header1= {'Content-Type':'application/json',};
    return this.http.post<any>(this.loginUrl, auth,{
      headers:header1,
      observe: 'response',
      responseType:'json'
    });
  }
  signUp(user: User){
    return this.http.post<any>(this.signupUrl, user);
  }

  getAuthToken() {
    // extract token from the response header 
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token')
  } 
}
