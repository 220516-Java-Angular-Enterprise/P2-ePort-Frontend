import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { User } from 'src/app/models/user';
import { AdminService } from 'src/app/services/admin.service';
=======
import { User } from '../../models/user';
import { AdminService } from '../../services/admin.service';
>>>>>>> 411b6892135a277d1c78f10be4d922386f6898ad

@Component({
  selector: 'app-admin-view-users',
  templateUrl: './admin-view-users.component.html',
  styleUrls: ['./admin-view-users.component.css']
})
export class AdminViewUsersComponent implements OnInit {

  constructor(private adminService: AdminService, private router: Router) { }

  users: User[] = [];

  ngOnInit(): void {
    this.adminService.getAllUsers().then(u => {
      this.users = u;
    });
  }

  goToUsername(username: string | undefined) {
    this.router.navigateByUrl('admin/view-users/${username}')
  }

}
