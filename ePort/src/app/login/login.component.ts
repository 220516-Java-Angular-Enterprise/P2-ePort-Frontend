import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
  };

  users: User[] = [];
  ngOnInit(): void {
    this.userService.getAllUsers().then(u=> {
      this.users = u;
    })
  }

  processForm(loginForm: NgForm) {
    if(loginForm.form.status == 'VALID'){
      this.userService.logIn(this.user);
      this.router.navigateByUrl('/default-user');
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
}
