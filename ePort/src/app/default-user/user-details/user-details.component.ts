import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService, private authService: AuthService, private currRouter: ActivatedRoute) { }

  displayFormSubmitError:boolean = false;

  username: string = "";

  user: User = {
    username: "",
    email: "",
    codename: "",
    shippingAddress: "",
    funds: 0,
    paymentID: "",
    isActive: false
  };

  placeholders = {
    username: "",
    codename: "",
    paymentID: "",
    shippingAddress: "",
    email: "",
    funds: 0
  }

  activateRequest: User = {
    username: "",
    password: ""
  }

  ngOnInit(): void {
    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.userService.getUserByUsername(this.username).then(u =>{
        this.user = u; 
      })
    })
  }
  
  processForm(updateUserInfoForm: NgForm){
    if(updateUserInfoForm.form.status == 'VALID'){
      console.log(this.user)
      this.userService.updateUserInfo(this.user);
      this.authService.logoutUser(); 
    }
    else{
      this.displayFormSubmitError = true;
    }
  }

}
