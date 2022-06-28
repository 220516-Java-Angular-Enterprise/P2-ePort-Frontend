import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, identity } from 'rxjs';
import { firstValueFrom, FirstValueFromConfig } from 'rxjs/internal/firstValueFrom';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
private userUrl = "http://localhost:8080/ePort/users";
  constructor(private http: HttpClient) { }

  // getAllUsers() {
  //   return (this.http.get<any>(this.userUrl));
  // }

  // getUserById(id: string): Promise<User> {
  //   return firstValueFrom(this.http.get<User>(this.userURL + "/" + identity));
  // }
}
