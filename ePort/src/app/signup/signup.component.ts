import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// need to implement account and alert service

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(

  ) { }

  ngOnInit(): void {
  }

}
