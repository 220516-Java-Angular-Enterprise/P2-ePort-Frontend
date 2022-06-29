import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/models/auth';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default-user',
  templateUrl: './default-user.component.html',
  styleUrls: ['./default-user.component.css']
})
export class DefaultUserComponent implements OnInit {
  users = []
  constructor(protected userService: UserService,private router:Router ) { }

  ngOnInit(): void {
    //need to grab user info on initialize
  }
  goToUserAccount(username: string | undefined) {
    this.router.navigateByUrl('/username' + username)
  }

  goToUserBiddingHistory(username: string | undefined) {
    // router for user history
  }

}
