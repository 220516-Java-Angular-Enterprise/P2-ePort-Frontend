import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service';

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

  auth: User = {
    username: "",
    password: ""
  }

  placeholders = {
    username: "",
    password: "",
  };

  ngOnInit(): void {
  }
  // const token = JSON.parse(localStorage.getItem('Authorization'));

  processForm(loginForm: NgForm) {
    if(loginForm.form.status == 'VALID'){
    }
    else{
      this.displayFormSubmitError = true;
    }
  }
  /**
   * let main_headers = {}
this.http.post(url,
  {email: this.username, password: this.password},
  {'headers' : new HttpHeaders ({'Content-Type' : 'application/json'}), 'responseType': 'text', observe:'response'})
  .subscribe(response => {
    const keys = response.headers.keys();
    let headers = keys.map(key => {
      `${key}: ${response.headers.get(key)}`
        main_headers[key] = response.headers.get(key)
       }
      );
  });
   */
  loginUser() {
    console.log(this.auth);
    this.authService.login(this.auth).subscribe(res => {
      console.log(res.headers.get('Authorization:'));

      
      this.router.navigate(['default-user'])
    }),
     (error: any) => console.log(error);
  }
}
