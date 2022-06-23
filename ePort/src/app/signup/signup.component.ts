import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route} from '@angular/router'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { ThisReceiver } from '@angular/compiler';

// need to implement account and alert service

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  displayFormSubmitError: boolean = false;

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
    username: "",
    password: "",
    codename: "",
    paymentID: "",
    shippingAddress: "",
    email: ""
  };

  ngOnInit(): void {
  }

  processForm(signupForm: NgForm){
    if(signupForm.form.status == 'VALID'){
      this.userService.signUp(this.user);
      this.router.navigateByUrl('/login');
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}
