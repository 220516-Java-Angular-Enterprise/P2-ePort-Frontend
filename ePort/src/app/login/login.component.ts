import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    username: "markstest1",
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
      this.authService.login(this.auth).subscribe(
        (res) => {
        console.log(res),
        localStorage.setItem('body',res.username)
        localStorage.setItem('role',res.role)
        localStorage.setItem('token0', res.headers)
    });
      if(localStorage.getItem('role') == "ADMIN") {
        this.router.navigateByUrl('admin')
      }
      else {
        this.router.navigateByUrl('default-user')
      }
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}
