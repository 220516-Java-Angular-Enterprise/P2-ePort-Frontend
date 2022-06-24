import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { Auth } from '../models/auth';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  auth: Auth = {
    username: "auctionUser001",
    password: "P@ssw0rd"
  }

  placeholders = {
    username: "",
    password: "",
  };

  ngOnInit(): void {
  }

  processForm(loginForm: NgForm) {
    if(loginForm.form.status == 'VALID'){
      this.authService.login(this.auth).subscribe(res => console.log(res)), (error: any) => console.log(error);
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}
