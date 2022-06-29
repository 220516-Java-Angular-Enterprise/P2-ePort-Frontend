import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  headers: any;

  // injecting authservice for login functionalities 
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

  auth: User = {
    username: "Username",
    password: ""
  }

  placeholders = {
    username: "",
    password: "",
  };

  ngOnInit(): void {
  }

  processForm(loginForm: NgForm) {
    if(loginForm.form.status == 'VALID'){
      this.authService.login(this.auth).subscribe(
        (res) => {
        if(res != null) {
          // storing resp in console and token, userdata in local storage
          console.log(res),
          localStorage.setItem('token', res.id),
          localStorage.setItem('userData', JSON.stringify(res)) 
        
          if(res.role == "ADMIN") {
            this.router.navigateByUrl('admin')
          }
          else {
            this.router.navigateByUrl('default-user')
          }
        }
      });
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}

