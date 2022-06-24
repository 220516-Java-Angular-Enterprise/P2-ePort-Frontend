import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewAuctionsComponent } from '../admin/admin-view-auctions/admin-view-auctions.component';
import { AdminViewUsersComponent } from '../admin/admin-view-users/admin-view-users.component';
import { AdminComponent } from '../admin/admin-home/admin.component';
import { DefaultUserComponent } from '../default-user/user/default-user.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { AdminViewUserDetailsComponent } from '../admin/admin-view-user-details/admin-view-user-details.component';
import { AddAuctionComponent } from '../admin/add-auction/add-auction.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }, 
  {
    path: 'default-user',
    component: DefaultUserComponent
  }, 
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin/view-users',
    component: AdminViewUsersComponent
  },
  {
    path: 'admin/view-auctions',
    component: AdminViewAuctionsComponent
  },
  {
    path: 'admin/view-auctions/newAuction',
    component: AddAuctionComponent
  },
  {
    path: 'admin/view-users/:username',
    component: AdminViewUserDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
