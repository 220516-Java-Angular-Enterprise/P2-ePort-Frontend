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
    password: "Password"
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
          // storing resp in console and userdata in local storage
          console.log(res),
          localStorage.setItem('token', res.token),
          localStorage.setItem('id', res.id),
          localStorage.setItem('role', res.role),
          localStorage.setItem('username', res.username)
          
          // redirect to login if user inactive
          if(!!localStorage.getItem('token') == false) {
            this.router.navigateByUrl('login')
          }
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

