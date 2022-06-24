import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminViewAuctionsComponent } from '../admin-view-auctions/admin-view-auctions.component';
import { AdminViewUsersComponent } from '../admin-view-users/admin-view-users.component';
import { AdminComponent } from '../home/admin/admin.component';
import { DefaultUserComponent } from '../home/default-user/default-user.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouterModule { }
