import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-funds',
  templateUrl: './funds.component.html',
  styleUrls: ['./funds.component.css']
})
export class FundsComponent implements OnInit {

  constructor(private userService: UserService, private currRouter: ActivatedRoute) { }

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
    }
    else{
      this.displayFormSubmitError = true;
    }
  }

}
