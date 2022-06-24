import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  private URL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort";
  private activateURL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/activate";
  private getAllUsersURL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/users";
  private getUserByIdURL = "http://eportv1-env.eba-kghc26gi.us-west-2.elasticbeanstalk.com/ePort/";

  getAllUsers(): Promise<User[]>{
    return firstValueFrom(this.http.get<User[]>(this.getAllUsersURL));
  }

  getUserByUsername(username: string): Promise<User> {
    return firstValueFrom(this.http.get<User>(this.getUserByIdURL + username));
  }

  activateUser(activateRequest: User){
    return firstValueFrom(this.http.put(this.activateURL, activateRequest))
  }

  deleteUser(deleteRequest: User){
    return firstValueFrom(this.http.put(this.URL + "/delete", deleteRequest))
  }
}
