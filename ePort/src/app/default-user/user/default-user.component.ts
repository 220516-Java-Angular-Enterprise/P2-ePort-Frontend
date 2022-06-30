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
  username:string = "";
  constructor(protected userService: UserService,private currRouter:Router ) { }

  ngOnInit(): void {
       //need to grab user info on initialize
       this.username = localStorage.getItem('username')!
       this.userService.getUserByUsername(this.username)
  }
  
  goToUserDetails(username: string | undefined) {
    this.currRouter.navigateByUrl('default-user/' + username)
  }
  
  goToUserFunds(username: string | undefined) {
    this.currRouter.navigateByUrl('default-user/' + username + "/funds")
  }

  goToUserBidHistory(username: string | undefined) {
    this.currRouter.navigateByUrl('default-user/' + username + "/history")
  }

  goToLiveAuction(username: string | undefined) {
    this.currRouter.navigateByUrl('default-user/' + username + "/view-auctions")
  }

}
