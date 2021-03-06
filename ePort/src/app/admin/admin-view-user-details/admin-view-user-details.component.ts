import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../models/user';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-view-user-details',
  templateUrl: './admin-view-user-details.component.html',
  styleUrls: ['./admin-view-user-details.component.css']
})
export class AdminViewUserDetailsComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router, private currRouter: ActivatedRoute) { }

  username: string = "";

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
  }

  activateRequest: User = {
    id: "",
    isActive: true
  }

  ngOnInit(): void {
    this.currRouter.params.subscribe(p => {
      this.username = p['username'];
      this.adminService.getUserByUsername(this.username).then(u => {
        this.user = u;
      })
    })
  }

  changeUserAccountStatus(){
    this.activateRequest.id = this.user.id;
    this.activateRequest.isActive = !this.user.isActive;
    this.adminService.activateUser(this.activateRequest);
    this.router.navigateByUrl('admin')
  }

  deleteUserAccount(){
    this.adminService.deleteUser(this.username);
    this.router.navigateByUrl('admin')
  }

}
