import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService, private currRouter: ActivatedRoute) { }

  displayFormSubmitError:boolean = false;

  user: User = {
    id: "",
    username: "",
    password: "",
    role: "",
    email: "",
    codename: "",
    shippingAddress: "",
    funds: 0,
    paymentID: "",
    isActive: false
  };

  placeholders = {
    id: "",
    username: "",
    password: "",
    codename: "",
    paymentID: "",
    shippingAddress: "",
    email: "",
    funds: 0
  }

  ngOnInit(): void {
    //need to grab user info on initialize
  }

  processForm(updateUserInfoForm: NgForm){
    if(updateUserInfoForm.form.status == 'VALID'){
      this.userService.updateUserInfo(this.user);
    }
    else{
      this.displayFormSubmitError = true;
    }
  }

}
