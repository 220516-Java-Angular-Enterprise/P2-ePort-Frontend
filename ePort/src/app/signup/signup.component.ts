import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Route} from '@angular/router'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User } from '../models/user';

// need to implement account and alert service

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

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
      this.authService.signUp(this.user);
      this.router.navigateByUrl('/login');
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}
